import { faker } from '@faker-js/faker';
interface AdditionalData{
  positionName:string;
}
export interface UserType {
    id: string;
    title: string;
    additionalData: AdditionalData;
  }
  
function createRandomUser(): UserType {
  const title = faker.person.fullName();
  const positionName = faker.person.jobTitle();
  const additionalData = {
    positionName
  }
  return {
    id: faker.string.uuid(),
    title,
    additionalData,
  };
}

export const tasks = faker.helpers.multiple(createRandomUser, { count: 10 });