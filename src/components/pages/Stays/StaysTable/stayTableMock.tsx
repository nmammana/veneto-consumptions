import { Stay } from "../../../../types/types";

export const staysTable: Stay[] = [
  {
    id: 1,
    start_date: "27/04/2022",
    end_date: "30/05/2022",
    users: [
      {
        id: 1,
        user: {
          id: 1,
          firstName: "Andres",
          lastName: "Gallardo",
          email: "gallardoandres18@gmail.com",
          identityNumber: "38500821",
          role: 5
        },
        qrCode: "123456",
        beneficts: [
          {
            typeOfBenefict: 1,
            quantity: 3,
            quantityAvailable: 3
          },
          {
            typeOfBenefict: 2,
            quantity: 6,
            quantityAvailable: 6
          }
        ]
      }
    ],
    apartment: 1
  }
];
