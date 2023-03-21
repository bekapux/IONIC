import { Place } from '../places/place.model';

export class Offer extends Place {
  constructor(
    public override id: string,
    public override title: string,
    public override description: string,
    public override imageUrl: string,
    public override price: number
  ) {
    super(id, title, description, imageUrl, price);
  }
}
