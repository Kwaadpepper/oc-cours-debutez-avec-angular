import Picture from '../types/picture'

export default class FaceSnap {
  constructor(
    private title: string,
    private description: string,
    private createdAt: Date,
    private snaps: number,
    private picture: Picture,
  ) {
    this.title = title
    this.description = description
    this.createdAt = new Date(createdAt)
    this.snaps = snaps
    this.picture = Object.assign({}, picture)
  }

  public getTitle(): string {
    return this.title
  }

  public getDescription(): string {
    return this.description
  }

  public getDate(): Date {
    return new Date(this.createdAt)
  }

  public getSnapCount(): number {
    return this.snaps
  }

  public incSnaps(): void {
    this.snaps++
  }

  public subSnaps(): void {
    this.snaps--
  }

  public getPicture(): Picture {
    return Object.assign({}, this.picture)
  }
}
