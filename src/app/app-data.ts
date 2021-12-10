import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './pages/model/responseModel';

export class AppData implements InMemoryDbService {
  createDb(): { contacts: Contact[] } {
    return {
      contacts: [
        {
          id: 697,
          name: "Ashly O'Hara",
          email: "hilton_reichel@troy.net",
          sex: "M",
          birthdate: new Date("1973-07-01T04:23:31.036240Z"),
          phoneNumber: "1-8106-122-6925",
          address: "1379 Zulauf Well",
          city: "Walkerborough",
          country: "Wales",
          favorite: false
        } as Contact
      ]
    };

  }

}
