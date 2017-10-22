class Location {
  country: string;
  state: string;
  city: string;
  venue: string;
}

class Deadlines {
  abstract: Date;
  paper: Date;
  notification: Date;
}

export class Call {
  year: number;
  location: Location;
  deadlines: Deadlines;
}
