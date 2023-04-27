import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Home');
    // this.addCheckboxesToFooter();

    this.now = new Date();
    this.days = Array.from(
      { length: 7 },
      (_, i) =>
        new Date(
          this.now.getFullYear(),
          this.now.getMonth(),
          this.now.getDate() -
            this.now.getDay() +
            i +
            (params.weekOffset ?? 0) * 7
        )
    );
  }

  async getHtml() {
    return `
		${await this.getHeader()}
		<button
			title="Go to previous week"
			class="previous__week__button"
			onclick="goToPreviousWeek();"
		></button>
		${await this.getCalendar()}
		<button
			title="Go to next week"
			class="next__week__button"
			onclick="goToNextWeek();"
		></button>
		<div class="reminder__holder hide" id="reminder__holder">
			<button
				title="add reminder"
				class="add__reminder__button"
				onclick="toggleReminderModal();"
			>
				+ Add reminders
			</button>
			<div class="reminder__modal close">
        <label class="reminder__modal__close" onclick="toggleReminderModal();"
          >X</label
        >
        <label class="reminder__input__label">Title: </label>
        <input
          class="reminder__input"
          type="text"
          name="title"
          id="reminder__title"
          placeholder="Please insert the title"
        />
        <label class="reminder__input__label">Day: </label>
        <input class="reminder__input" type="date" name="day" id="reminder__day" />
        <label class="reminder__input__label">Time: </label>
        <input class="reminder__input" type="time" name="time" id="reminder__time" />
        <label class="reminder__input__label">Color: </label>
        <select class="reminder__select" name="color" id="reminder__color">
          <option value="0" style="background-color: #1c435a" slected>Blue</option>
          <option value="1" style="background-color: #1b4929">Green</option>
          <option value="2" style="background-color: #652e4d">Purple</option>
          <option value="3" style="background-color: #2f3337">Black</option>
        </select>
        <label class="reminder__input__label">Icon: </label>
        <select class="reminder__select" name="icon" id="reminder__icon">
          <option value="0" selected>No icon</option>
          <option value="1">Zoom</option>
          <option value="2">Discord</option>
          <option value="3">Classroom</option>
          <option value="4">MyCourseVille</option>
        </select>
        <label class="reminder__input__label">Link: </label>
        <input
          class="reminder__input"
          type="text"
          name="link"
          id="reminder__link"
          placeholder="Please insert the link"
        />
        <button class="reminder__submit" onclick="postReminder();">Confirm</button>
      </div>
		</div>`;
  }

  async addCheckboxesToFooter() {
    const footer = document.querySelector('.footer');
    const filters_container = document.createElement('ul');
    filters_container.classList.add('filters__container');
    const filters = ['Classes', 'Assignments', 'Reminders'];
    filters.forEach((filter) => {
      const filter_li = document.createElement('li');
      filter_li.classList.add('filter');
      const filter_label = document.createElement('span');
      filter_label.classList.add('filter__label');
      filter_label.innerHTML = filter;
      const filter_checkbox = document.createElement('input');
      filter_checkbox.title = `checkbox for filtering ${filter.toLowerCase()}`;
      filter_checkbox.type = 'checkbox';
      filter_checkbox.classList.add('filter__checkbox');
      filter_checkbox.checked = true;
      filter_li.appendChild(filter_label);
      filter_li.appendChild(filter_checkbox);
      filters_container.appendChild(filter_li);
    });
    footer.prepend(filters_container);
  }

  async getCalendar() {
    const week_slider = document.createElement('ul');
    week_slider.classList.add('week');
    week_slider.id = 'week_slider';

    this.days.forEach((day) => {
      const day_li = document.createElement('li');
      day_li.classList.add('day');
      const day_label = document.createElement('h2');
      day_label.classList.add('day__label');
      day_label.innerHTML = day.toLocaleDateString('en-US', {
        weekday: 'short',
      });
      const card = document.createElement('div');
      card.classList.add('card');
      card.id = `${day.getFullYear()}-${day.getMonth()}-${day.getDate()}`;
      const card_date = document.createElement('h3');
      card_date.classList.add('card__date');
      if (
        day.getFullYear() === this.now.getFullYear() &&
        day.getMonth() === this.now.getMonth() &&
        day.getDate() === this.now.getDate()
      ) {
        card_date.classList.add('today');
      }
      card_date.innerHTML = day.getDate();
      card.appendChild(card_date);
      day_li.appendChild(day_label);
      day_li.appendChild(card);
      week_slider.appendChild(day_li);
    });

    return week_slider.outerHTML;
  }

  async getHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    const month = document.createElement('h1');
    month.classList.add('header__month');
    const year = document.createElement('h1');
    year.classList.add('header__year');
    header.appendChild(month);
    header.appendChild(year);

    this.setMonthAndYear(
      month,
      year,
      this.days[0],
      this.days[this.days.length - 1]
    );

    return header.outerHTML;
  }

  setMonthAndYear(monthElement, yearElement, startOfWeek, endOfWeek) {
    monthElement.innerHTML = `${startOfWeek.toLocaleDateString('en-US', {
      month: 'long',
    })}${
      startOfWeek.getMonth() === endOfWeek.getMonth()
        ? ''
        : ` - ${endOfWeek.toLocaleDateString('en-US', { month: 'long' })}`
    }`;

    yearElement.innerHTML = `${startOfWeek.getFullYear()}${
      startOfWeek.getFullYear() === endOfWeek.getFullYear()
        ? ''
        : ` - ${endOfWeek.getFullYear()}`
    }`;
  }
}
