// Телефонная книга
let phoneBook = {
    data: [],

    addContact: function (name, phones) {
        let result = this.data.find(obj => {
            return obj.name === name
        });
        if (result === undefined) {
            this.data.push({
                name: name,
                phones: phones
            });
        } else {
            for(let ph of phones) {
                result.phones.push(ph);
            }
        }
    },

    show: function () {
        let result = [];
        for (let contact of this.data) {
            result.push(contact.name + ": " + contact.phones.join(", "));
        }
        console.log(result.sort());
        return result.sort();
    },
    removePhone: function (phoneToCompare) {
        for (let contact of this.data) {
            for (let phone of contact.phones) {
                if (Number(phoneToCompare)=== Number(phone)) {
                    contact.phones.splice(contact.phones.indexOf(phoneToCompare), 1);
                    if (contact.phones.length === 0) {
                        this.data.splice(this.data.indexOf(contact), 1);
                    }
                    return true;
                }
            }
        }
        return false;
    }
};


/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    let data = command.split(' ');
    let commandName = data[0];
    if (commandName === 'ADD') {
        return phoneBook.addContact(data[1], data[2].split(','));
    } else if (commandName === 'SHOW') {
        return phoneBook.show();
    } else if (commandName === 'REMOVE_PHONE') {
        return phoneBook.removePhone(data[1]);
    }
};
