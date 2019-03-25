
export class Album{
  title: string;
  artist: string;
  description: string;
  id: number;

  constructor(title, artist, description, id){
    this.title = title;
    this.artist = artist;
    this.description = description;
    this.id = id;
  }
}
