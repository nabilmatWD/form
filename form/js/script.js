(function() {
  document.addEventListener("DOMContentLoaded", function() {
    const display = new Display();
    display.checkInput();
    display.disableBtn();
  });

  document.getElementById("person").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.querySelector(".name");
    this.email = document.querySelector("email");
    this.dateOfBirth = document.querySelector("dateOfBirth");
    this.phone = document.querySelector("phone");
    this.city = document.querySelector("city");
    this.country = document.querySelector("country");
    this.facebook = document.querySelector("facebook");
    this.twitter = document.querySelector("twitter");

    const person = new Person(
      name.value,
      email.value,
      dateOfBirth.value,
      phone.value,
      city.value,
      country.value,
      facebook.value,
      twitter.value
    );

    const display = new Display();

    display.message(person);
    display.clearInput();
  });

  function Display() {
    this.name = document.getElementById("name");
    this.email = document.getElementById("email");
    this.dateOfBirth = document.getElementById("dateOfBirth");
    this.phone = document.getElementById("phone");
    this.city = document.getElementById("city");
    this.country = document.getElementById("country");
    this.facebook = document.getElementById("facebook");
    this.twitter = document.getElementById("twitter");
    this.persons = document.querySelector(".persons");
  }

  Display.prototype.checkInput = function() {
    this.name.addEventListener("blur", this.validateInput);
    this.email.addEventListener("blur", this.validateInput);
    this.dateOfBirth.addEventListener("blur", this.validateInput);
    this.phone.addEventListener("blur", this.validateInput);
    this.city.addEventListener("blur", this.validateInput);
    this.country.addEventListener("blur", this.validateInput);
    this.facebook.addEventListener("blur", this.validateInput);
    this.twitter.addEventListener("blur", this.validateInput);
  };

  Display.prototype.disableBtn = function() {
    const btn = document.querySelector(".btnSubmit");
    btn.disabled = true;
  };

  Display.prototype.validateInput = function() {
    if (this.value === "") {
      this.classList.remove("filled");
      this.classList.add("failed");
    } else {
      this.classList.add("filled");
      this.classList.remove("failed");
    }
    const filled = document.querySelectorAll(".filled");

    if (filled.length === 8) {
      document.querySelector(".btnSubmit").disabled = false;
    } else {
      document.querySelector(".btnSubmit").disabled = true;
    }
  };

  Display.prototype.clearInput = function() {
    (this.name.value = ""),
      (this.email.value = ""),
      (this.dateOfBirth.value = ""),
      (this.phone.value = ""),
      (this.city.value = ""),
      (this.country.value = ""),
      (this.facebook.value = ""),
      (this.twitter.value = "");

    this.name.classList.remove("filled", "failed");
    this.email.classList.remove("filled", "failed");
    this.dateOfBirth.classList.remove("filled", "failed");
    this.phone.classList.remove("filled", "failed");
    this.city.classList.remove("filled", "failed");
    this.country.classList.remove("filled", "failed");
    this.facebook.classList.remove("filled", "failed");
    this.twitter.classList.remove("filled", "failed");
  };

  Display.prototype.message = function(person) {
    const params = ["displayItem", "alert", "alert-success"];

    const message = document.querySelector(".message");
    const loader = document.querySelector(".loader");

    message.classList.add("displayItem", "alert", "alert-success");
    loader.classList.add("displayItem");

    const self = this;
    self.disableBtn();

    setTimeout(function() {
      message.classList.remove("displayItem", "alert", "alert-success");
      loader.classList.remove("displayItem");

      self.addPerson(person);
    }, 2000);
  };

  Display.prototype.addPerson = function(person) {
    const random = this.getRandom();
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="card">
            <div class="card-header">
              <img src="./img/person-${random}.jpg" class="card-img-top" alt="" />
            </div>
            <div class="card-body">
              <!-- person name -->
              <h6 class="text-info">
                <span class="badge badge-warning">name :</span>
                <span class="badge_info" id="person-name"> ${person.name}</span>
              </h6>
              <!-- person email -->
              <h6 class="text-info">
                <span class="badge badge-warning">email :</span>
                <span class="badge_info" id="person-email">
                  ${person.email}</span
                >
              </h6>
              <!-- person name -->
              <h6 class="text-info">
                <span class="badge badge-warning">Date of birth :</span>
                <span class="badge_info" id="person-date"> ${
                  person.dateOfBirth
                }</span>
              </h6>
              <!-- person Phone -->
              <h6 class="text-info">
                <span class="badge badge-warning">Phone :</span>
                <span class="badge_info" id="person-phone"> ${
                  person.phone
                }</span>
              </h6>
              <!-- person city -->
              <h6 class="text-info">
                <span class="badge badge-warning">City :</span>
                <span class="badge_info" id="person-city"> ${person.city}</span>
              </h6>
              <!-- person country -->
              <h6 class="text-info">
                <span class="badge badge-warning">Country :</span>
                <span class="badge_info" id="person-country"> ${
                  person.country
                }</span>
              </h6>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-md-6">
                  <i class="fab fa-facebook">/${person.facebook}</i>
                </div>
                <div class="col-md-6">
                  <i class="fab fa-twitter">/${person.twitter}</i>
                </div>
              </div>
            </div>
          </div>
        `;
    this.persons.appendChild(div);
  };

  Display.prototype.getRandom = function() {
    let random = Math.floor(Math.random() * 7 + 1);
    return random;
  };

  function Person(
    name,
    email,
    dateOfBirth,
    phone,
    city,
    country,
    facebook,
    twitter
  ) {
    this.name = name;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.phone = phone;
    this.city = city;
    this.country = country;
    this.facebook = facebook;
    this.twitter = twitter;
  }
})();
