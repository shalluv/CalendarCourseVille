const backendIPAddress = '127.0.0.1:3000';

const login = () => {
  window.location.href = `http://${backendIPAddress}/courseville/auth_app`;
};

const logout = () => {
  window.location.href = `http://${backendIPAddress}/courseville/logout`;
};

const getUserProfile = async () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  await fetch(
    `http://${backendIPAddress}/courseville/get_profile_info`,
    options
  )
    .then((response) => response.json())
    .then(async (data) => {
      if (data.error) return;
      toggleHideAfterLogin();
      const username__link = document.createElement('a');
      username__link.classList.add('username__label');
      username__link.href = `/`;
      username__link.innerHTML = data.user.firstname_en;
      document.getElementById('username__label').appendChild(username__link);
      await getProps();
    })
    .catch((error) => console.error(error))
    .finally(() => {
      removeLoading();
    });
};

const removeLoading = () => {
  const days = document.getElementsByClassName('day');
  for (let i = 0; i < days.length; i++) {
    days[i].classList.remove('loading');
  }
};

const getProps = async () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  await fetch(`http://${backendIPAddress}/props`, options).then((response) =>
    response.json().then((data) => {
      data.assignments.forEach((assignment) => {
        addAssignment(assignment);
      });

      data.courses.courses.forEach((course) => {
        course.schedule.forEach((schedule) => {
          addClass(course, schedule);
        });
      });

      data.reminders.forEach((reminder) => {
        addReminder(reminder);
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

  const cardEvent = document.createElement('div');
  cardEvent.classList.add('card__event');

  const eventItem = document.createElement('a');
  eventItem.classList.add('event__item');
  eventItem.classList.add('assignment');
  eventItem.href = assignment.link;
  eventItem.target = '_blank';

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

  const cardEvent = document.createElement('div');
  cardEvent.classList.add('card__event');

  const eventStartTime = document.createElement('h4');
  eventStartTime.classList.add('event__start__time');
  eventStartTime.innerHTML = `${startTime.getHours()}:${startTime.getMinutes()}`;

  const eventItem = document.createElement('a');
  eventItem.classList.add('event__item');
  eventItem.classList.add('onsite');
  eventItem.href = course.link;
  eventItem.target = '_blank';

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

const addReminder = (reminder) => {
  const duetime = new Date(reminder.duetime * 1000);
  const card = document.getElementById(
    `${duetime.getFullYear()}-${duetime.getMonth()}-${duetime.getDate()}`
  );
  if (!card) return;

  const cardEvent = document.createElement('div');
  cardEvent.classList.add('card__event');

  const eventItem = document.createElement('div');
  eventItem.classList.add('event__item');
  eventItem.style.backgroundColor = [
    '#1C435A',
    '#1B4929',
    '#652E4D',
    '#2F3337',
  ][reminder.color];

  const eventDeleteButton = document.createElement('button');
  eventDeleteButton.classList.add('event__delete__button');
  eventDeleteButton.innerHTML = 'X';
  eventDeleteButton.addEventListener('click', async () => {
    const options = {
      method: 'DELETE',
      credentials: 'include',
    };

    await fetch(
      `http://${backendIPAddress}/reminder/${reminder.reminder_id}`,
      options
    ).then((response) => {
      if (response.status === 200) {
        window.location.reload();
      }
    });
  });

  const eventDueTime = document.createElement('h4');
  eventDueTime.classList.add('event__end__time');
  eventDueTime.innerHTML = `${duetime.getHours()}:${duetime.getMinutes()}`;

  const eventItemTitle = document.createElement('h5');
  eventItemTitle.classList.add('event__item__title');
  eventItemTitle.innerHTML = reminder.title;

  eventItemTitle.prepend(eventDeleteButton);
  eventItem.appendChild(eventItemTitle);

  if (reminder.icon) {
    const event__icon__holder = document.createElement('div');
    event__icon__holder.classList.add('event__icon__holder');

    const iconName = ['zoom', 'discord', 'onsite', 'assignment'][
      reminder.icon - 1
    ];

    const event__icon = document.createElement('img');
    event__icon.classList.add('event__icon');
    event__icon.src = `./static/images/icon-${iconName}.svg`;
    event__icon.alt = `icon for ${iconName} event`;

    event__icon__holder.appendChild(event__icon);
    eventItem.appendChild(event__icon__holder);
  }

  cardEvent.appendChild(eventItem);
  cardEvent.appendChild(eventDueTime);

  card.appendChild(cardEvent);
};

const toggleHideAfterLogin = () => {
  loginButton = document.getElementById('login__button');
  if (loginButton) loginButton.classList.add('hide');

  reminderHolder = document.getElementById('reminder__holder');
  if (reminderHolder) reminderHolder.classList.remove('hide');

  loginLabel = document.getElementById('login__label');
  if (loginLabel) loginLabel.classList.add('hide');

  usernameLabel = document.getElementById('username__label');
  if (usernameLabel) usernameLabel.classList.remove('hide');

  logoutLabel = document.getElementById('logout__label');
  if (logoutLabel) logoutLabel.classList.remove('hide');
};

const postReminder = async () => {
  const title = document.getElementById('reminder__title').value;
  const day = document.getElementById('reminder__day').value;
  const time = document.getElementById('reminder__time').value;
  const color = document.getElementById('reminder__color').value;
  const icon = document.getElementById('reminder__icon').value;
  const link = document.getElementById('reminder__link').value;

  const duetime = Math.floor(new Date(`${day} ${time}`).getTime() / 1000);

  const body = {
    title,
    duetime,
    color: parseInt(color),
    icon: parseInt(icon),
    link,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(body),
    credentials: 'include',
  };

  await fetch(`http://${backendIPAddress}/reminder/`, options)
    .then((response) => {
      if (response.status === 200) {
        toggleReminderModal();
        window.location.reload();
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const toggleSidebar = () => {
  document.querySelector('.sidebar').classList.toggle('close');
};

const toggleReminderModal = () => {
  document.querySelector('.reminder__modal').classList.toggle('close');

  const now = new Date();
  document.getElementById('reminder__day').valueAsDate = now;
  document.getElementById('reminder__time').value = `${now
    .getHours()
    .toString()
    .padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
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
