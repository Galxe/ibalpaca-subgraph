/* eslint-disable prefer-const */
import { User } from '../types/schema'
import { Transfer } from '../types/ibALPACA/ibALPACA'

const zeroAddress = '0x0000000000000000000000000000000000000000'

export function handleTransfer(event: Transfer): void {
  if (event.params.from.toHexString() != zeroAddress) {
    return
  }
  let user = User.load(event.params.to.toHexString())
  if (user != null) {
    return
  }
  user = new User(event.params.to.toHexString())
  user.tx = event.transaction.hash.toHexString()
  user.save()
}
