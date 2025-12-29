export function getEvents() {
  return JSON.parse(localStorage.getItem("events")) || [];
}

export function saveEvent(event) {
  const events = getEvents();
  events.push(event);
  localStorage.setItem("events", JSON.stringify(events));
}

export function updateEvent(updatedEvent) {
  const events = getEvents().map(event =>
    event.id === updatedEvent.id ? updatedEvent : event
  );
  localStorage.setItem("events", JSON.stringify(events));
}

export function deleteEvent(id) {
  const events = getEvents().filter(event => event.id !== id);
  localStorage.setItem("events", JSON.stringify(events));
}

// 🔥 FIX: Registration handler
export function registerUserToEvent(eventId, userEmail) {
  const events = getEvents();

  const updatedEvents = events.map(event => {
    if (event.id === eventId) {
      event.registrations = event.registrations || [];

      if (!event.registrations.includes(userEmail)) {
        event.registrations.push(userEmail);
      }
    }
    return event;
  });

  localStorage.setItem("events", JSON.stringify(updatedEvents));
}
