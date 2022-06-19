export const athleteMap = {
  'dariuso.': {
    name: 'Darius Orvidas',
    avatar: '4ce9e897-9d5a-4e33-b0f3-832143552b02.jpg',
  },
  'simasb.': {
    name: 'Simas Bakus',
    avatar: 'f80137ee-79f1-4f30-a797-870386de90e3.jpg',
  },
  'henrikasm.': {
    name: 'Henrikas Miliūnas',
    avatar: '42404403-845d-4435-97c9-3e0b954591d9.jpg',
  },
  'simasv.': {
    name: 'Simas Veleckas',
    avatar: 'd82c14c1-c1b0-4c13-b92d-e4028fac2d0c.jpg',
  },
  'petern.': {
    name: 'Peter Nijsen',
    avatar: 'daa8311d-36fe-45ad-8682-16ac0137bf62.jpg',
  },
  'erniukasb.': {
    name: 'Ernestas Burokas',
    avatar: '5114ef83-251a-4f3b-857f-b601635a124e.jpg',
  },
  'edgarasa.': {
    name: 'Edgaras Abromaitis',
    avatar: 'a194a2ea-bb64-4903-8eea-c32f69190703.jpg',
  },
  'edvinasv.': {
    name: 'Edvinas Velička',
    avatar: 'f54486c2-7c17-4fd1-8de3-2cd80569b3d6.jpg',
  },
  'rokass.': {
    name: 'Rokas Sidaravičius',
    avatar: '2360c973-7a42-490e-a014-cc17645efb8a.jpg',
  },
  'pauliusv.': {
    name: 'Paulius Vaitkevičius',
    avatar: 'ee2aaccb-ea6c-4e4a-969a-3e308cbf6dc3.jpg',
  },
  'martynasj.': {
    name: 'Martynas Juzaitis',
    avatar: '8bc01fc1-5fe4-4741-b8c5-b0545593e052.jpg',
  },
  'mindaugass.': {
    name: 'Mindaugas Stanionis',
    avatar: '90ef9116-0eb6-4e12-ba43-b06a55becd41.jpg',
  },
  'audriusl.': {
    name: 'Audrius Lukoševičius',
    avatar: '882a5bc3-3990-451a-ad5d-f0354da953fc.jpg',
  },
  'andrejusi.': {
    name: 'Andrejus Ivaščenko',
    avatar: '94e4a794-6a5d-4722-8992-750256945b6a.png',
  },
  'klaidasp.': {
    name: 'Klaidas Pilkis',
    avatar: '980385af-64fa-4868-bfb8-bef3c74d1720.png',
  },
  'sandraž.': {
    name: 'Sandra Žemaitaitytė',
    avatar: 'f2914e1c-e7fe-494b-9cb6-6d3803bb8c67.jpg',
  },
  'raimondap.': {
    name: 'Raimonda Preimonaitė',
    avatar: '1fc73cf3-60f5-4637-b0bd-5ea3298ee43b.jpg',
  },
  'mildag.': {
    name: 'Milda Gaulienė',
    avatar: '23f7b52a-3e93-42a5-99ef-88a0126118cd.jpg',
  },
  'danilk.': {
    name: 'Danil Kurevin',
    avatar: 'bce026c3-7734-4a37-96bb-c6e615740a3a.jpg',
  },
  'mantasr.': {
    name: 'Mantas Reika',
    avatar: 'cd95a6dd-ec40-414f-b32b-69868e22bffa.JPG',
  },
  'oļegsč.': {
    name: 'Oļegs Čapligins',
    avatar: '9fcade4a-c1c5-4d85-9f75-df13684555ad.jpg',
  },
  'normantass.': {
    name: 'Normantas Stankevičius',
    avatar: 'ff45be1c-dfbe-4b3e-9dbe-1b5b1ffe7457.png',
  },
  'tadask.': {
    name: 'Tadas Kučinskas',
    avatar: '842b4c2e-2404-4c41-a9ff-0faeec05d6fc.jpg',
  },
  'robertask.': {
    name: 'Robertas Kalninis',
    avatar: '705fb1ac-149a-4d85-8812-b1e880f4931b.jpg',
  },
  'vaidas.': {
    name: 'Vaida Stanionytė',
    avatar: 'd0aba2fe-e55d-4171-bde0-a2f79a9b44aa.jpg',
  },
  'rokassi.': {
    name: 'Rokas Sičiovas',
    avatar: '22a9066d-28cc-4969-b6cc-a3fd110b9e32.jpg',
  },
  'egidijusr.': {
    name: 'Egidijus Rubys',
    avatar: 'b2478476-f027-49a7-ab94-d9be06b3d0cf.jpg',
  },
  'juozasn.': {
    name: 'Juozas Narkevičius',
    avatar: '7c3cf75d-5a22-4cb8-b99f-6e08bd28e4e4.jpg',
  },
  'maj0rboobzp.': {
    name: 'Paulius Juknis',
    avatar: '9489433a-ce2f-4596-ac0e-0e5a0d49fd41.jpg',
  },
  'tomasb.': {
    name: 'Tomas Banys',
    avatar: 'd66e2646-24b2-478f-8f85-e0be08be818f.JPG',
  },
  'justinasl.': {
    name: 'Justinas Lažauninkas',
    avatar: '54ca079c-7393-4b78-b931-ee2e7bfa1864.png',
  },
  'aurimass.': {
    name: 'Aurimas Stanaitis',
    avatar: '33a62878-3622-4d75-9b36-db0c6c3bfb1b.jpg',
  },
};

export function getAthleteName(name) {
  if (athleteMap[name.toLowerCase()]) {
    return athleteMap[name.toLowerCase()].name;
  }

  return name;
}

const baseAvatarUrl = 'https://cm-b09eaa56-75eb-42f6-9d77-145ac6f6dedb.s3.eu-central-1.amazonaws.com/system/db/images/employees_photos/';

export function getAthleteAvatar(name) {
  if (athleteMap[name.toLowerCase()] && athleteMap[name.toLowerCase()].avatar) {
    return `${baseAvatarUrl}${athleteMap[name.toLowerCase()].avatar}`;
  }

  return 'https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/d4/b2/cd/d4b2cd6b-3281-afaa-75bd-f999d234b879/source/512x512bb.jpg';
}
