export class Explicaciones {
  item: string;
  img: string;

  constructor(private items: string, private imgs: string) {
    this.item = this.items;
    this.img = this.imgs;
  }
}
