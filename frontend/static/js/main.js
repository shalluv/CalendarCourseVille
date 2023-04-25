const login = () => {
  window.location.href = 'http://localhost:3000/courseville/auth_app';
};

const logout = () => {
  window.location.href = `http://localhost:3000/courseville/logout`;
};

const getUserProfile = async () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  await fetch('http://localhost:3000/courseville/get_profile_info', options)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('username').innerHTML = data.user.firstname_en;
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
