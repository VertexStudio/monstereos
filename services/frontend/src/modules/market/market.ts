import { MonsterProps } from "../monsters/monsters"

export interface OfferProps {
    id: number,
    user: string,
    monster: MonsterProps,
    type: number,
    newOwner: string,
    value: string,
    placedAt: number,
    endsAt: number,
    transferEndsAt: number
  }

  export const parseOfferFromChain = (offer:any, monsters: MonsterProps[]):OfferProps | undefined => {
      const monster = monsters.find((value: MonsterProps, index: number, obj: MonsterProps[]):boolean => {
            return value.id = offer.pet_id
      }) 
      if (monster) {
          // tslint:disable-next-line:no-console
          console.log(offer)
        return {
            id : offer.id,
            user : offer.user,
            monster,
            type : offer.type,
            newOwner : offer.new_owner,
            value: offer.value,
            placedAt: offer.placed_at * 1000,
            endsAt: offer.ends_at * 1000,
            transferEndsAt: offer.transfer_ends_at
        }
    } else {
        return undefined
    }
  }