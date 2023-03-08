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
          first_name: "Andres",
          last_name: "Gallardo",
          user_email: "gallardoandres18@gmail.com",
          document: "38500821",
          role: 5
        },
        qr_code: "123456",
        benefits: [
          {
            type_of_benefit: 1,
            quantity: 3,
            quantity_available: 3
          },
          {
            type_of_benefit: 2,
            quantity: 6,
            quantity_available: 6
          }
        ]
      }
    ],
    apartment: 1,
    payed: true
  }
];
