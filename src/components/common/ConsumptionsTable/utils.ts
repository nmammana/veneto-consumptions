import { isEmpty } from "lodash";
import { DateTime } from "luxon";
import {
  Consumption,
  ConsumptionTableItem,
  notUndefined
} from "../../../types/types";
import { getFullNameFromPerson } from "../../../utils/helpers";

export const formatConsumptionList = (
  consumptions: Consumption[]
): ConsumptionTableItem[] => {
  if (isEmpty(consumptions)) return [];
  return consumptions
    .map(consumption => {
      if (!consumption.id) return undefined;
      const consumptionDateTime = consumption.added;
      const consumptionDate =
        DateTime.fromISO(consumptionDateTime).toFormat("dd/MM/yyyy HH:mm");
      const userName = getFullNameFromPerson(
        consumption.user_stay.user.first_name,
        consumption.user_stay.user.last_name
      );
      const itemConsumptionList = consumption.items
        .map(consumptionItem => {
          const itemName = consumptionItem.item.name;
          const { quantity, total } = consumptionItem;
          const totalPayed = total ? `$${total}` : "Gratis";
          return itemName && quantity && totalPayed
            ? `${quantity} x ${itemName}: ${totalPayed}`
            : undefined;
        })
        .filter(notUndefined)
        .join(", \n");
      const extraPrice = consumption.extra_price
        ? `$${consumption.extra_price}`
        : "-";
      const consumptionTotal = consumption.total
        ? `$${consumption.total}`
        : "$0";
      return {
        id: consumption.id,
        date: consumptionDate,
        userName,
        itemConsumptionList,
        extraPrice,
        signature: consumption.signature,
        payed: consumption.payed,
        consumptionTotal
      };
    })
    .filter(notUndefined);
};
