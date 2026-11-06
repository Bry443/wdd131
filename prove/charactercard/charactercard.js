const isDead = document.querySelector('#isDeadContainer');

const aCharacterCard = {
    name: 'Stink Lizard',
    class: 'Booger Picker',
    image: 'images/snortleblat.webp',
    level: 1,
    health: 100,
    attacked: function () {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            isDead.hidden = false;
        };
        this.updateStats();
        console.log(this.health);
    },
    levelUp: function () {
        this.level++;
        this.updateStats();
        console.log(this.level);
    },
    updateStats: function () {
        document.querySelector('img').setAttribute('src', this.image);
document.querySelector('img').setAttribute('alt', this.name);
        document.querySelector('.name').textContent = this.name;
        document.querySelector('#characterClass').textContent = "Class: " + this.class;
        document.querySelector('#level').textContent = "Level: " + this.level;
        document.querySelector('#health').textContent = "Health: " + this.health;
    },
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        // if the entered index is valid, increment the enrolled count and re-render the sections
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
    }
  };

aCharacterCard.updateStats();

document.querySelector("#attacked").addEventListener("click", function () {
aCharacterCard.attacked();
});

document.querySelector("#levelUp").addEventListener("click", function () {
aCharacterCard.levelUp();
});