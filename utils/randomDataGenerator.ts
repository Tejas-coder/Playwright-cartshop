import { faker } from "@faker-js/faker";

export class RandomDataGenerator {
    static generateFirstName(): string {
        return faker.person.firstName();
    }

    static generateLastName(): string {
        return faker.person.lastName();
    }

    static generateEmail(): string {
        return faker.internet.email();
    }

    static generatePhoneNumber(): string {
        return faker.phone.number();
    }

    static generatePassword(): string {
        return faker.internet.password();
    }
}