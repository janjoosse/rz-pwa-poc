import { CompanyType } from "./company-type";
import { Entry } from "./contentful/entry";
import { Country } from "./country";
import { MediaWrapper } from "./mediaWrapper";

export interface Company {
    entryTitle: string;
    name: string;
    description: string;
    type: CompanyType;
    address: string;
    postalCode: string;
    city: string;
    countries: Entry<Country>[];
    companyWebsite: string;
    region: string;
    contactPerson: string;
    eMail: string;
    phone: string;
    logo: Entry<MediaWrapper>;
    whatsAppPhone: string;
}