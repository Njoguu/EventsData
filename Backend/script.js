async function load(){
    // Fetch events data
    const URL = 'https://script.google.com/macros/s/AKfycbwjztfQrmzV3PK6MOAFoEQvmGLzcazGJKjMFL0BUiadE6CEvzwCWtRG-3wq4vsTStE4/exec';
    const response = await fetch(URL);

    const events = await response.json();

    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';

    console.log(events);

    for (let event of events) {
        eventsContainer.innerHTML += `
          <div class="card w-72 bg-base-100 shadow-xl">
            <figure><img src="${event.Image}" alt="${event.Name}" /></figure>
            <div class="card-body">
              <h2 class="card-title">${event.Name}</h2>
              <p>${event.Location}<br/>@ ${event.Date}</p>
              <div class="card-actions justify-end">
                <a class="btn btn-primary" href="${event.Link}" target="_blank">RSVP</a>
              </div>
            </div>
          </div>
        `
      }
}

load();