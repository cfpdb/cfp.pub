class Location {
  country: string;
  state: string;
  city: string;
  venue: string;
}

class Dates {
  dates: Date[];
}

class DateSet {
  abstract: Dates;
  submit: Dates;
  notification: Dates;
  rebuttal: Dates;
}

class Deadlines {
  paper: DateSet;
  poster: DateSet;
  workshop: DateSet;
  tutorial: DateSet;
  wip: DateSet;
}

export class Call {
  year: number;
  location: Location;
  deadlines: Deadlines;
}
