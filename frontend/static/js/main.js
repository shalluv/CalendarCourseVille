const login = () => {
  window.location.href = `http://127.0.0.1:3000/courseville/auth_app`;
};

const logout = () => {
  window.location.href = `http://127.0.0.1:3000/courseville/logout`;
};

const getUserProfile = async () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  await fetch(`http://127.0.0.1:3000/courseville/get_profile_info`, options)
    .then((response) => response.json())
    .then(async (data) => {
      document.getElementById('login__button').classList.add('hide');
      document.getElementById('reminder__holder').classList.remove('hide');
      document.getElementById('login__label').classList.add('hide');
      document.getElementById('username__label').classList.remove('hide');
      document.getElementById('logout__label').classList.remove('hide');
      document.getElementById('username__label').innerHTML =
        data.user.firstname_en;
      await getProps();
    })
    .catch((error) => console.error(error));
};

const getProps = async () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  await fetch(`http://127.0.0.1:3000/props`, options).then((response) =>
    response.json().then((data) => {
      data.assignments.forEach((assignment) => {
        addAssignment(assignment);
      });

      data.courses.courses.forEach((course) => {
        course.schedule.forEach((schedule) => {
          addClass(course, schedule);
        });
      });
    })
  );
};

const addAssignment = (assignment) => {
  const duetime = new Date(assignment.duetime * 1000);
  const card = document.getElementById(
    `${duetime.getFullYear()}-${duetime.getMonth()}-${duetime.getDate()}`
  );
  if (!card) return;

  const cardEvent = document.createElement('a');
  cardEvent.classList.add('card__event');
  cardEvent.href = assignment.link;

  const eventItem = document.createElement('div');
  eventItem.classList.add('event__item');
  eventItem.classList.add('assignment');

  const eventDueTime = document.createElement('h4');
  eventDueTime.classList.add('event__end__time');
  eventDueTime.innerHTML = `${duetime.getHours()}:${duetime.getMinutes()}`;

  const eventItemTitle = document.createElement('h5');
  eventItemTitle.classList.add('event__item__title');
  eventItemTitle.innerHTML = assignment.title;

  const event__icon__holder = document.createElement('div');
  event__icon__holder.classList.add('event__icon__holder');

  const event__icon = document.createElement('img');
  event__icon.classList.add('event__icon');
  event__icon.src = './static/images/icon-assignment.svg';
  event__icon.alt = 'icon for assignment event';

  event__icon__holder.appendChild(event__icon);
  eventItem.appendChild(eventItemTitle);
  eventItem.appendChild(event__icon__holder);
  cardEvent.appendChild(eventItem);
  cardEvent.appendChild(eventDueTime);

  card.appendChild(cardEvent);
};

const addClass = (course, schedule) => {
  const startTime = new Date(schedule.start_time * 1000);
  const card = document.getElementById(
    `${startTime.getFullYear()}-${startTime.getMonth()}-${startTime.getDate()}`
  );
  if (!card) return;
  const endTime = new Date(schedule.end_time * 1000);

  const cardEvent = document.createElement('a');
  cardEvent.classList.add('card__event');
  cardEvent.href = course.link;

  const eventStartTime = document.createElement('h4');
  eventStartTime.classList.add('event__start__time');
  eventStartTime.innerHTML = `${startTime.getHours()}:${startTime.getMinutes()}`;

  const eventItem = document.createElement('div');
  eventItem.classList.add('event__item');
  eventItem.classList.add('onsite');

  const eventEndTime = document.createElement('h4');
  eventEndTime.classList.add('event__end__time');
  eventEndTime.innerHTML = `${endTime.getHours()}:${endTime.getMinutes()}`;

  const eventItemTitle = document.createElement('h5');
  eventItemTitle.classList.add('event__item__title');
  eventItemTitle.innerHTML = course.course_name;

  const event__icon__holder = document.createElement('div');
  event__icon__holder.classList.add('event__icon__holder');

  const event__icon = document.createElement('img');
  event__icon.classList.add('event__icon');
  event__icon.src = './static/images/icon-onsite.svg';
  event__icon.alt = 'icon for onsite event';

  event__icon__holder.appendChild(event__icon);
  eventItem.appendChild(eventItemTitle);
  eventItem.appendChild(event__icon__holder);
  cardEvent.appendChild(eventStartTime);
  cardEvent.appendChild(eventItem);
  cardEvent.appendChild(eventEndTime);

  card.appendChild(cardEvent);
};

const toggleSidebar = () => {
  document.querySelector('.sidebar').classList.toggle('close');
};

const toggleReminderModal = () => {
  document.querySelector('.reminder__modal').classList.toggle('close');
};

const goToPreviousWeek = () => {
  const weekOffset = parseInt(window.location.href.split('/').pop()) || 0;
  window.location.href = `/${weekOffset - 1 === 0 ? '' : weekOffset - 1}`;
};

const goToNextWeek = () => {
  const weekOffset = parseInt(window.location.href.split('/').pop()) || 0;
  window.location.href = `/${weekOffset + 1 === 0 ? '' : weekOffset + 1}`;
};

document.addEventListener('DOMContentLoaded', async () => {
  await getUserProfile();
});
