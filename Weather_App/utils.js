const DEGREE_CELCIUS_SYMBOL = "&#8451";

class Utils {
  static formatDate() {
    let currentDate = new Date();
    let dateString = currentDate.toLocaleDateString("en-us", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return dateString;
  }
}

export { Utils, DEGREE_CELCIUS_SYMBOL };
