import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Home');
  }

  async getHtml() {
    return `
		<div class="container">
		<header class="header">
			<h1 class="header__month">April</h1>
			<h1 class="header__year">2023</h1>
		</header>
		<button
			class="previous__week__button"
			onclick="alert('Go to previous week!')"
			style="display: none"
		></button>
		<ul class="week">
			<li class="day">
				<h2 class="day__label">Mon</h2>
				<div class="card">
					<h3 class="card__date">17</h3>
					<div class="card__event">
						<h4 class="event__start__time">8:00 a.m.</h4>
						<div class="event__item zoom">
							<p class="event__name">Com Eng Math</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__zoom.svg"
									alt="icon for zoom event"
								/>
							</div>
						</div>
						<div class="event__item zoom">
							<p class="event__name">Algorithm</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__zoom.svg"
									alt="icon for zoom event"
								/>
							</div>
						</div>
						<h4 class="event__end__time">11:00 a.m.</h4>
					</div>
					<div class="card__event">
						<h4 class="event__start__time">1:00 p.m.</h4>
						<div class="event__item onsite">
							<p class="event__name">Prog Lang Prin</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__onsite.svg"
									alt="icon for onsite event"
								/>
							</div>
						</div>
						<h4 class="event__end__time">4:00 p.m.</h4>
					</div>
				</div>
			</li>
			<li class="day">
				<h2 class="day__label">Tue</h2>
				<div class="card">
					<h3 class="card__date">18</h3>
					<div class="card__event">
						<h4 class="event__start__time">9:30 a.m.</h4>
						<div class="event__item zoom">
							<p class="event__name">Embedded Sys</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__onsite.svg"
									alt="icon for onsite event"
								/>
							</div>
						</div>
						<h4 class="event__end__time">0:30 p.m.</h4>
					</div>
				</div>
			</li>
			<li class="day">
				<h2 class="day__label">Wed</h2>
				<div class="card">
					<h3 class="card__date">19</h3>
					<div class="card__event">
						<h4 class="event__start__time">9:30 a.m.</h4>
						<div class="event__item onsite">
							<p class="event__name">Com Eng Ess</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__onsite.svg"
									alt="icon for onsite event"
								/>
							</div>
						</div>
						<h4 class="event__end__time">0:30 p.m.</h4>
					</div>
					<div class="card__event">
						<h4 class="event__start__time">1:00 p.m.</h4>
						<div class="event__item onsite">
							<p class="event__name">Com Press Skill</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__onsite.svg"
									alt="icon for onsite event"
								/>
							</div>
						</div>
						<h4 class="event__end__time">4:00 p.m.</h4>
					</div>
				</div>
			</li>
			<li class="day">
				<h2 class="day__label">Thu</h2>
				<div class="card">
					<h3 class="card__date">20</h3>
					<div class="card__event">
						<h4 class="event__start__time">8:00 a.m.</h4>
						<div class="event__item zoom">
							<p class="event__name">Com Eng Math</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__zoom.svg"
									alt="icon for zoom event"
								/>
							</div>
						</div>
						<div class="event__item zoom">
							<p class="event__name">Algorithm</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__zoom.svg"
									alt="icon for zoom event"
								/>
							</div>
						</div>
						<h4 class="event__end__time">11:00 a.m.</h4>
					</div>
					<div class="card__event">
						<h4 class="event__start__time">1:00 p.m.</h4>
						<div class="event__item onsite">
							<p class="event__name">Embedded Lab</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__onsite.svg"
									alt="icon for onsite event"
								/>
							</div>
						</div>
						<h4 class="event__end__time">4:00 p.m.</h4>
					</div>
				</div>
			</li>
			<li class="day">
				<h2 class="day__label">Fri</h2>
				<div class="card">
					<h3 class="card__date">21</h3>
					<div class="card__event">
						<h4 class="event__start__time">8:00 a.m.</h4>
						<div class="event__item zoom">
							<p class="event__name">Com Eng Math</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__zoom.svg"
									alt="icon for zoom event"
								/>
							</div>
						</div>
						<div class="event__item zoom">
							<p class="event__name">Algorithm</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__zoom.svg"
									alt="icon for zoom event"
								/>
							</div>
						</div>
						<h4 class="event__end__time">11:00 a.m.</h4>
					</div>
					<div class="card__event">
						<h4 class="event__start__time">1:00 p.m.</h4>
						<div class="event__item onsite">
							<p class="event__name">Embedded Lab</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__onsite.svg"
									alt="icon for onsite event"
								/>
							</div>
						</div>
						<h4 class="event__end__time">4:00 p.m.</h4>
					</div>
					<div class="card__event"></div>
				</div>
			</li>
			<li class="day">
				<h2 class="day__label">Sat</h2>
				<div class="card">
					<h3 class="card__date">22</h3>
				</div>
			</li>
			<li class="day">
				<h2 class="day__label">Sun</h2>
				<div class="card">
					<h3 class="card__date today">23</h3>
					<div class="card__event">
						<h4 class="now__label">Now -> 8:50 p.m.</h4>
						<h4 class="event__start__time">9:00 a.m.</h4>
						<div class="event__item onsite">
							<p class="event__name">Weekly Meeting</p>
						</div>
						<h4 class="event__end__time">10:00 p.m.</h4>
					</div>
					<div class="card__event">
						<h4 class="event__start__time class">0:00 p.m.</h4>
						<div class="event__item assignment">
							<p class="event__name">HW Univ Thai</p>
							<div class="event__icon__holder">
								<img
									class="event__icon"
									src="/static/images/icon__assignment.svg"
									alt="icon for assignment event"
								/>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<button
		class="next__week__button"
		onclick="alert('Go to next week!')"
		></button>
		<button class="add__reminder__button">+ Add reminders</button>
		<footer class="footer">
			<ul class="filters__container">
				<li class="filter">
					<span class="filter__label">Class</span>
					<input type="checkbox" class="filter__checkbox" checked="checked" />
				</li>
				<li class="filter">
					<span class="filter__label">Assignments</span>
					<input type="checkbox" class="filter__checkbox" checked="checked" />
				</li>
				<li class="filter">
					<span class="filter__label">Reminders</span>
					<input type="checkbox" class="filter__checkbox" checked="checked" />
				</li>
			</ul>
			<button class="info__button" onclick="alert('Open sidebar!')">i</button>
		</footer>
	</div>
	
	
	`;
  }
}
