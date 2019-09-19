import {
  NewPhase as NewPhaseEvent,
  NewPeriod as NewPeriodEvent,
  StakeSet as StakeSetEvent,
  Draw as DrawEvent,
  TokenAndETHShift as TokenAndETHShiftEvent,
  DisputeCreation as DisputeCreationEvent,
  AppealPossible as AppealPossibleEvent,
  AppealDecision as AppealDecisionEvent
} from "../generated/Contract/KlerosLiquid"
import {
  NewPhase,
  NewPeriod,
  StakeSet,
  Draw,
  TokenAndETHShift,
  DisputeCreation,
  AppealPossible,
  AppealDecision
} from "../generated/KlerosLiquidSchema"

export function handleNewPhase(event: NewPhaseEvent): void {
  let entity = new NewPhase(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._phase = event.params._phase
  entity.save()
}

export function handleNewPeriod(event: NewPeriodEvent): void {
  let entity = new NewPeriod(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._disputeID = event.params._disputeID
  entity._period = event.params._period
  entity.save()
}

export function handleStakeSet(event: StakeSetEvent): void {
  let entity = new StakeSet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._address = event.params._address
  entity._subcourtID = event.params._subcourtID
  entity._stake = event.params._stake
  entity._newTotalStake = event.params._newTotalStake
  entity.save()
}

export function handleDraw(event: DrawEvent): void {
  let entity = new Draw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._address = event.params._address
  entity._disputeID = event.params._disputeID
  entity._appeal = event.params._appeal
  entity._voteID = event.params._voteID
  entity.save()
}

export function handleTokenAndETHShift(event: TokenAndETHShiftEvent): void {
  let entity = new TokenAndETHShift(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._address = event.params._address
  entity._disputeID = event.params._disputeID
  entity._tokenAmount = event.params._tokenAmount
  entity._ETHAmount = event.params._ETHAmount
  entity.save()
}

export function handleDisputeCreation(event: DisputeCreationEvent): void {
  let entity = new DisputeCreation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._disputeID = event.params._disputeID
  entity._arbitrable = event.params._arbitrable
  entity.save()
}

export function handleAppealPossible(event: AppealPossibleEvent): void {
  let entity = new AppealPossible(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._disputeID = event.params._disputeID
  entity._arbitrable = event.params._arbitrable
  entity.save()
}

export function handleAppealDecision(event: AppealDecisionEvent): void {
  let entity = new AppealDecision(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._disputeID = event.params._disputeID
  entity._arbitrable = event.params._arbitrable
  entity.save()
}
