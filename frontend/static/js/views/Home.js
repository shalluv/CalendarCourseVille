import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Home');
  }

  async getHtml() {
    return `
		<div class="container">
			<h1>Hello!</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores cumque, ipsam tempore excepturi eligendi odio iusto aliquam necessitatibus praesentium quia fugiat ex, iure consequatur quos. Beatae obcaecati atque nulla.
				Laborum minus iste sint dicta eum quod, animi fugiat. Ullam eveniet laboriosam minima quis odit, perspiciatis nemo voluptates exercitationem hic obcaecati animi dolore odio cum. Autem sint voluptatum quae cupiditate.
				Aperiam deserunt tempore sit deleniti possimus ea amet doloribus natus illo laudantium, eaque sint exercitationem quasi delectus? Minus id illum labore soluta similique expedita! Perspiciatis nesciunt corrupti fugit sed aperiam!
			</p>
		</div>`;
  }
}
