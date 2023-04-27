import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('About Us');
  }

  async getHtml() {
    const groupImg = document.createElement('img');
    groupImg.classList.add('group__img');
    groupImg.src = `./static/images/group.png`;
    groupImg.alt = `group image`;

    const groupImgHolder = document.createElement('div');
    groupImgHolder.classList.add('group__img__holder');
    groupImgHolder.appendChild(groupImg);

    const groupLogo = document.createElement('img');
    groupLogo.classList.add('group__logo');
    groupLogo.src = `./static/images/logo.png`;
    groupLogo.alt = `group logo`;

    const groupLogoHolder = document.createElement('div');
    groupLogoHolder.classList.add('group__logo__holder');
    groupLogoHolder.appendChild(groupLogo);

    const groupMembers = document.createElement('ul');
    groupMembers.classList.add('group__members');
    groupMembers.innerHTML = `
			<li class="group__member">Arm</li>
			<li>-</li>
			<li class="group__role">UX/UI</li>
			<li class="group__member">Nut</li>
			<li>-</li>
			<li class="group__role">UX/UI</li>
			<li class="group__member">Leon</li>
			<li>-</li>
			<li class="group__role">Frontend</li>
			<li class="group__member">James</li>
			<li>-</li>
			<li class="group__role">Backend</li>
			<li class="group__member">Midfield</li>
			<li>-</li>
			<li class="group__role">PM</li>
			`;

    const wrapper = document.createElement('div');
    wrapper.classList.add('aboutus__wrapper');
    wrapper.appendChild(groupImgHolder);
    wrapper.appendChild(groupLogoHolder);
    wrapper.appendChild(groupMembers);

    return wrapper.outerHTML;
  }
}
