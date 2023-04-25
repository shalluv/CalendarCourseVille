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
    .then((data) => {
      document.getElementById('login__label').classList.add('hide');
      document.getElementById('username__label').classList.remove('hide');
      document.getElementById('logout__label').classList.remove('hide');
      document.getElementById('username__label').innerHTML =
        data.user.firstname_en;
    })
    .catch((error) => console.error(error));
};

const toggleSidebar = () => {
  document.querySelector('.sidebar').classList.toggle('close');
};

const toggleReminderModal = () => {
  document.querySelector('.reminder__modal').classList.toggle('close');
};

const goToPreviousWeek = () => {};

const goToNextWeek = () => {};
