export const createPerson = function (name, age, gender, mail) {
  const person = {
      name: name,
      age: age,
      gender: gender,
      'e-mail': mail,
      sayHi: function() {
        if (person.gender === 'жен') {
          return `Привет! Меня зовут ${name}. Буду рада пообщаться по почте. Пиши мне на ${mail}`;
        } else {
            return `Привет! Меня зовут ${name}. Буду рад пообщаться по почте. Пиши мне на ${mail}`;
        }
  }
  };
  return person;
};