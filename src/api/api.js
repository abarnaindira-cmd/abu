// LocalStorage Helper --------------------------

function getLS(key, defaultValue) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}

function setLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ------------------------------------------------

// AUTH
export function registerUser(email, password) {
  const users = getLS("users", []);
  const exists = users.find(u => u.email === email);
  if (exists) return { error: "User already exists" };

  const newUser = { email, password };
  users.push(newUser);
  setLS("users", users);
  return { success: true, user: newUser };
}

export function loginUser(email, password) {
  const users = getLS("users", []);
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return { error: "Invalid credentials" };

  localStorage.setItem("smart_user", JSON.stringify(user));
  return { success: true, user };
}

// ------------------------------------------------
// EVENTS CRUD

export function getEvents() {
  return getLS("events", []);
}

export function createEvent(event) {
  const events = getEvents();
  const newEvent = { id: Date.now(), ...event };
  events.push(newEvent);
  setLS("events", events);
  return newEvent;
}

export function updateEvent(id, updated) {
  const events = getEvents();
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return null;

  events[index] = { ...events[index], ...updated };
  setLS("events", events);
  return events[index];
}

export function deleteEvent(id) {
  let events = getEvents();
  events = events.filter(e => e.id !== id);
  setLS("events", events);
}

// ------------------------------------------------
// REGISTRATION

export function registerForEvent(eventId, userEmail) {
  const registrations = getLS("registrations", []);
  const already = registrations.find(r => r.eventId === eventId && r.user === userEmail);

  if (already) return { error: "Already registered" };

  registrations.push({
    id: Date.now(),
    eventId,
    user: userEmail
  });

  setLS("registrations", registrations);
  return { success: true };
}

export function getUserRegistrations(email) {
  const registrations = getLS("registrations", []);
  const events = getEvents();

  return registrations
    .filter(r => r.user === email)
    .map(r => ({
      ...r,
      event: events.find(e => e.id === r.eventId)
    }));
}

// ------------------------------------------------
// ANALYTICS (Category count)

export function getCategoryStats() {
  const events = getEvents();
  const stats = {};

  events.forEach(e => {
    stats[e.category] = (stats[e.category] || 0) + 1;
  });

  return stats;
}
