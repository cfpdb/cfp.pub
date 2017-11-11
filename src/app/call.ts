interface Serializable<T> {
  deserialize(input: Object): T;
}

export class CallLocation implements Serializable<CallLocation> {
  country: string;
  state: string;
  city: string;
  venue: string;

  deserialize(input) {
    this.country = input.country;
    this.state = input.state;
    this.city = input.city;
    this.venue = input.venue;
    return this;
  }

  formatForMapsAPI(): string {
    return [this.venue, this.city, this.state, this.country]
      .filter(function(e) { return !!e; })
      .join(",");
  }
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
  paper: DateSet[];
  poster: DateSet;
  workshop: DateSet;
  tutorial: DateSet;
  wip: DateSet;
}

class Person {
  name: String;
  affiliation: String;
}

export class Call implements Serializable<Call> {
  year: number;
  location: CallLocation;
  deadlines: Deadlines;
  topics: String[];

  deserialize(input) {
    this.year = input.year;
    this.location = new CallLocation().deserialize(input.location);
    this.deadlines = input.deadlines;
    console.log(input.people)
    if (input.topics) {
      this.topics = input.topics
    }
    return this;
  }
}
