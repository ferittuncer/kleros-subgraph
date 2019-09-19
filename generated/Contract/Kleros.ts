// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewPeriod extends EthereumEvent {
  get params(): NewPeriod__Params {
    return new NewPeriod__Params(this);
  }
}

export class NewPeriod__Params {
  _event: NewPeriod;

  constructor(event: NewPeriod) {
    this._event = event;
  }

  get _period(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get _session(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokenShift extends EthereumEvent {
  get params(): TokenShift__Params {
    return new TokenShift__Params(this);
  }
}

export class TokenShift__Params {
  _event: TokenShift;

  constructor(event: TokenShift) {
    this._event = event;
  }

  get _account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _disputeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ArbitrationReward extends EthereumEvent {
  get params(): ArbitrationReward__Params {
    return new ArbitrationReward__Params(this);
  }
}

export class ArbitrationReward__Params {
  _event: ArbitrationReward;

  constructor(event: ArbitrationReward) {
    this._event = event;
  }

  get _account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _disputeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class AppealPossible extends EthereumEvent {
  get params(): AppealPossible__Params {
    return new AppealPossible__Params(this);
  }
}

export class AppealPossible__Params {
  _event: AppealPossible;

  constructor(event: AppealPossible) {
    this._event = event;
  }

  get _disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DisputeCreation extends EthereumEvent {
  get params(): DisputeCreation__Params {
    return new DisputeCreation__Params(this);
  }
}

export class DisputeCreation__Params {
  _event: DisputeCreation;

  constructor(event: DisputeCreation) {
    this._event = event;
  }

  get _disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _arbitrable(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AppealDecision extends EthereumEvent {
  get params(): AppealDecision__Params {
    return new AppealDecision__Params(this);
  }
}

export class AppealDecision__Params {
  _event: AppealDecision;

  constructor(event: AppealDecision) {
    this._event = event;
  }

  get _disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _arbitrable(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Contract__disputesResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: i32;
  value5: BigInt;
  value6: i32;
  value7: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: i32,
    value5: BigInt,
    value6: i32,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromI32(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromI32(this.value6));
    map.set("value7", EthereumValue.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class Contract__jurorsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class Kleros extends SmartContract {
  static bind(address: Address): Kleros {
    return new Kleros("Contract", address);
  }

  lastPeriodChange(): BigInt {
    let result = super.call("lastPeriodChange", []);
    return result[0].toBigInt();
  }

  governor(): Address {
    let result = super.call("governor", []);
    return result[0].toAddress();
  }

  disputeStatus(_disputeID: BigInt): i32 {
    let result = super.call("disputeStatus", [
      EthereumValue.fromUnsignedBigInt(_disputeID)
    ]);
    return result[0].toI32();
  }

  currentRuling(_disputeID: BigInt): BigInt {
    let result = super.call("currentRuling", [
      EthereumValue.fromUnsignedBigInt(_disputeID)
    ]);
    return result[0].toBigInt();
  }

  rnBlock(): BigInt {
    let result = super.call("rnBlock", []);
    return result[0].toBigInt();
  }

  amountJurors(_disputeID: BigInt): BigInt {
    let result = super.call("amountJurors", [
      EthereumValue.fromUnsignedBigInt(_disputeID)
    ]);
    return result[0].toBigInt();
  }

  segmentSize(): BigInt {
    let result = super.call("segmentSize", []);
    return result[0].toBigInt();
  }

  disputes(param0: BigInt): Contract__disputesResult {
    let result = super.call("disputes", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return new Contract__disputesResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toI32(),
      result[5].toBigInt(),
      result[6].toI32(),
      result[7].toBigInt()
    );
  }

  session(): BigInt {
    let result = super.call("session", []);
    return result[0].toBigInt();
  }

  getVoteCount(_disputeID: BigInt, _appeals: BigInt, _choice: BigInt): BigInt {
    let result = super.call("getVoteCount", [
      EthereumValue.fromUnsignedBigInt(_disputeID),
      EthereumValue.fromUnsignedBigInt(_appeals),
      EthereumValue.fromUnsignedBigInt(_choice)
    ]);
    return result[0].toBigInt();
  }

  isDrawn(_disputeID: BigInt, _juror: Address, _draw: BigInt): boolean {
    let result = super.call("isDrawn", [
      EthereumValue.fromUnsignedBigInt(_disputeID),
      EthereumValue.fromAddress(_juror),
      EthereumValue.fromUnsignedBigInt(_draw)
    ]);
    return result[0].toBoolean();
  }

  getVoteAccount(
    _disputeID: BigInt,
    _appeals: BigInt,
    _voteID: BigInt
  ): Address {
    let result = super.call("getVoteAccount", [
      EthereumValue.fromUnsignedBigInt(_disputeID),
      EthereumValue.fromUnsignedBigInt(_appeals),
      EthereumValue.fromUnsignedBigInt(_voteID)
    ]);
    return result[0].toAddress();
  }

  NON_PAYABLE_AMOUNT(): BigInt {
    let result = super.call("NON_PAYABLE_AMOUNT", []);
    return result[0].toBigInt();
  }

  arbitrationFeePerJuror(): BigInt {
    let result = super.call("arbitrationFeePerJuror", []);
    return result[0].toBigInt();
  }

  defaultNumberJuror(): i32 {
    let result = super.call("defaultNumberJuror", []);
    return result[0].toI32();
  }

  getVoteRuling(_disputeID: BigInt, _appeals: BigInt, _voteID: BigInt): BigInt {
    let result = super.call("getVoteRuling", [
      EthereumValue.fromUnsignedBigInt(_disputeID),
      EthereumValue.fromUnsignedBigInt(_appeals),
      EthereumValue.fromUnsignedBigInt(_voteID)
    ]);
    return result[0].toBigInt();
  }

  getLastSessionVote(_disputeID: BigInt, _juror: Address): BigInt {
    let result = super.call("getLastSessionVote", [
      EthereumValue.fromUnsignedBigInt(_disputeID),
      EthereumValue.fromAddress(_juror)
    ]);
    return result[0].toBigInt();
  }

  timePerPeriod(param0: BigInt): BigInt {
    let result = super.call("timePerPeriod", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return result[0].toBigInt();
  }

  getWinningChoice(_disputeID: BigInt, _appeals: BigInt): BigInt {
    let result = super.call("getWinningChoice", [
      EthereumValue.fromUnsignedBigInt(_disputeID),
      EthereumValue.fromUnsignedBigInt(_appeals)
    ]);
    return result[0].toBigInt();
  }

  randomNumber(): BigInt {
    let result = super.call("randomNumber", []);
    return result[0].toBigInt();
  }

  rng(): Address {
    let result = super.call("rng", []);
    return result[0].toAddress();
  }

  maxAppeals(): BigInt {
    let result = super.call("maxAppeals", []);
    return result[0].toBigInt();
  }

  alpha(): BigInt {
    let result = super.call("alpha", []);
    return result[0].toBigInt();
  }

  jurors(param0: Address): Contract__jurorsResult {
    let result = super.call("jurors", [EthereumValue.fromAddress(param0)]);
    return new Contract__jurorsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  getWinningCount(_disputeID: BigInt, _appeals: BigInt): BigInt {
    let result = super.call("getWinningCount", [
      EthereumValue.fromUnsignedBigInt(_disputeID),
      EthereumValue.fromUnsignedBigInt(_appeals)
    ]);
    return result[0].toBigInt();
  }

  getStakePerDraw(): BigInt {
    let result = super.call("getStakePerDraw", []);
    return result[0].toBigInt();
  }

  period(): i32 {
    let result = super.call("period", []);
    return result[0].toI32();
  }

  appealCost(_disputeID: BigInt, _extraData: Bytes): BigInt {
    let result = super.call("appealCost", [
      EthereumValue.fromUnsignedBigInt(_disputeID),
      EthereumValue.fromFixedBytes(_extraData)
    ]);
    return result[0].toBigInt();
  }

  arbitrationCost(_extraData: Bytes): BigInt {
    let result = super.call("arbitrationCost", [
      EthereumValue.fromFixedBytes(_extraData)
    ]);
    return result[0].toBigInt();
  }

  minActivatedToken(): BigInt {
    let result = super.call("minActivatedToken", []);
    return result[0].toBigInt();
  }

  pinakion(): Address {
    let result = super.call("pinakion", []);
    return result[0].toAddress();
  }

  validDraws(
    _jurorAddress: Address,
    _disputeID: BigInt,
    _draws: Array<BigInt>
  ): boolean {
    let result = super.call("validDraws", [
      EthereumValue.fromAddress(_jurorAddress),
      EthereumValue.fromUnsignedBigInt(_disputeID),
      EthereumValue.fromUnsignedBigIntArray(_draws)
    ]);
    return result[0].toBoolean();
  }
}

export class ExecuteOrderCall extends EthereumCall {
  get inputs(): ExecuteOrderCall__Inputs {
    return new ExecuteOrderCall__Inputs(this);
  }

  get outputs(): ExecuteOrderCall__Outputs {
    return new ExecuteOrderCall__Outputs(this);
  }
}

export class ExecuteOrderCall__Inputs {
  _call: ExecuteOrderCall;

  constructor(call: ExecuteOrderCall) {
    this._call = call;
  }

  get _data(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _target(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ExecuteOrderCall__Outputs {
  _call: ExecuteOrderCall;

  constructor(call: ExecuteOrderCall) {
    this._call = call;
  }
}

export class SetArbitrationFeePerJurorCall extends EthereumCall {
  get inputs(): SetArbitrationFeePerJurorCall__Inputs {
    return new SetArbitrationFeePerJurorCall__Inputs(this);
  }

  get outputs(): SetArbitrationFeePerJurorCall__Outputs {
    return new SetArbitrationFeePerJurorCall__Outputs(this);
  }
}

export class SetArbitrationFeePerJurorCall__Inputs {
  _call: SetArbitrationFeePerJurorCall;

  constructor(call: SetArbitrationFeePerJurorCall) {
    this._call = call;
  }

  get _arbitrationFeePerJuror(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetArbitrationFeePerJurorCall__Outputs {
  _call: SetArbitrationFeePerJurorCall;

  constructor(call: SetArbitrationFeePerJurorCall) {
    this._call = call;
  }
}

export class SetAlphaCall extends EthereumCall {
  get inputs(): SetAlphaCall__Inputs {
    return new SetAlphaCall__Inputs(this);
  }

  get outputs(): SetAlphaCall__Outputs {
    return new SetAlphaCall__Outputs(this);
  }
}

export class SetAlphaCall__Inputs {
  _call: SetAlphaCall;

  constructor(call: SetAlphaCall) {
    this._call = call;
  }

  get _alpha(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetAlphaCall__Outputs {
  _call: SetAlphaCall;

  constructor(call: SetAlphaCall) {
    this._call = call;
  }
}

export class SetMaxAppealsCall extends EthereumCall {
  get inputs(): SetMaxAppealsCall__Inputs {
    return new SetMaxAppealsCall__Inputs(this);
  }

  get outputs(): SetMaxAppealsCall__Outputs {
    return new SetMaxAppealsCall__Outputs(this);
  }
}

export class SetMaxAppealsCall__Inputs {
  _call: SetMaxAppealsCall;

  constructor(call: SetMaxAppealsCall) {
    this._call = call;
  }

  get _maxAppeals(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxAppealsCall__Outputs {
  _call: SetMaxAppealsCall;

  constructor(call: SetMaxAppealsCall) {
    this._call = call;
  }
}

export class ActivateTokensCall extends EthereumCall {
  get inputs(): ActivateTokensCall__Inputs {
    return new ActivateTokensCall__Inputs(this);
  }

  get outputs(): ActivateTokensCall__Outputs {
    return new ActivateTokensCall__Outputs(this);
  }
}

export class ActivateTokensCall__Inputs {
  _call: ActivateTokensCall;

  constructor(call: ActivateTokensCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ActivateTokensCall__Outputs {
  _call: ActivateTokensCall;

  constructor(call: ActivateTokensCall) {
    this._call = call;
  }
}

export class WithdrawCall extends EthereumCall {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class VoteRulingCall extends EthereumCall {
  get inputs(): VoteRulingCall__Inputs {
    return new VoteRulingCall__Inputs(this);
  }

  get outputs(): VoteRulingCall__Outputs {
    return new VoteRulingCall__Outputs(this);
  }
}

export class VoteRulingCall__Inputs {
  _call: VoteRulingCall;

  constructor(call: VoteRulingCall) {
    this._call = call;
  }

  get _disputeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ruling(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _draws(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class VoteRulingCall__Outputs {
  _call: VoteRulingCall;

  constructor(call: VoteRulingCall) {
    this._call = call;
  }
}

export class AppealCall extends EthereumCall {
  get inputs(): AppealCall__Inputs {
    return new AppealCall__Inputs(this);
  }

  get outputs(): AppealCall__Outputs {
    return new AppealCall__Outputs(this);
  }
}

export class AppealCall__Inputs {
  _call: AppealCall;

  constructor(call: AppealCall) {
    this._call = call;
  }

  get _disputeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _extraData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class AppealCall__Outputs {
  _call: AppealCall;

  constructor(call: AppealCall) {
    this._call = call;
  }
}

export class SetDefaultNumberJurorCall extends EthereumCall {
  get inputs(): SetDefaultNumberJurorCall__Inputs {
    return new SetDefaultNumberJurorCall__Inputs(this);
  }

  get outputs(): SetDefaultNumberJurorCall__Outputs {
    return new SetDefaultNumberJurorCall__Outputs(this);
  }
}

export class SetDefaultNumberJurorCall__Inputs {
  _call: SetDefaultNumberJurorCall;

  constructor(call: SetDefaultNumberJurorCall) {
    this._call = call;
  }

  get _defaultNumberJuror(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetDefaultNumberJurorCall__Outputs {
  _call: SetDefaultNumberJurorCall;

  constructor(call: SetDefaultNumberJurorCall) {
    this._call = call;
  }
}

export class SetTimePerPeriodCall extends EthereumCall {
  get inputs(): SetTimePerPeriodCall__Inputs {
    return new SetTimePerPeriodCall__Inputs(this);
  }

  get outputs(): SetTimePerPeriodCall__Outputs {
    return new SetTimePerPeriodCall__Outputs(this);
  }
}

export class SetTimePerPeriodCall__Inputs {
  _call: SetTimePerPeriodCall;

  constructor(call: SetTimePerPeriodCall) {
    this._call = call;
  }

  get _timePerPeriod(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class SetTimePerPeriodCall__Outputs {
  _call: SetTimePerPeriodCall;

  constructor(call: SetTimePerPeriodCall) {
    this._call = call;
  }
}

export class SetMinActivatedTokenCall extends EthereumCall {
  get inputs(): SetMinActivatedTokenCall__Inputs {
    return new SetMinActivatedTokenCall__Inputs(this);
  }

  get outputs(): SetMinActivatedTokenCall__Outputs {
    return new SetMinActivatedTokenCall__Outputs(this);
  }
}

export class SetMinActivatedTokenCall__Inputs {
  _call: SetMinActivatedTokenCall;

  constructor(call: SetMinActivatedTokenCall) {
    this._call = call;
  }

  get _minActivatedToken(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinActivatedTokenCall__Outputs {
  _call: SetMinActivatedTokenCall;

  constructor(call: SetMinActivatedTokenCall) {
    this._call = call;
  }
}

export class ExecuteRulingCall extends EthereumCall {
  get inputs(): ExecuteRulingCall__Inputs {
    return new ExecuteRulingCall__Inputs(this);
  }

  get outputs(): ExecuteRulingCall__Outputs {
    return new ExecuteRulingCall__Outputs(this);
  }
}

export class ExecuteRulingCall__Inputs {
  _call: ExecuteRulingCall;

  constructor(call: ExecuteRulingCall) {
    this._call = call;
  }

  get disputeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExecuteRulingCall__Outputs {
  _call: ExecuteRulingCall;

  constructor(call: ExecuteRulingCall) {
    this._call = call;
  }
}

export class ReceiveApprovalCall extends EthereumCall {
  get inputs(): ReceiveApprovalCall__Inputs {
    return new ReceiveApprovalCall__Inputs(this);
  }

  get outputs(): ReceiveApprovalCall__Outputs {
    return new ReceiveApprovalCall__Outputs(this);
  }
}

export class ReceiveApprovalCall__Inputs {
  _call: ReceiveApprovalCall;

  constructor(call: ReceiveApprovalCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value2(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class ReceiveApprovalCall__Outputs {
  _call: ReceiveApprovalCall;

  constructor(call: ReceiveApprovalCall) {
    this._call = call;
  }
}

export class MultipleShotTokenRepartitionCall extends EthereumCall {
  get inputs(): MultipleShotTokenRepartitionCall__Inputs {
    return new MultipleShotTokenRepartitionCall__Inputs(this);
  }

  get outputs(): MultipleShotTokenRepartitionCall__Outputs {
    return new MultipleShotTokenRepartitionCall__Outputs(this);
  }
}

export class MultipleShotTokenRepartitionCall__Inputs {
  _call: MultipleShotTokenRepartitionCall;

  constructor(call: MultipleShotTokenRepartitionCall) {
    this._call = call;
  }

  get _disputeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _maxIterations(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MultipleShotTokenRepartitionCall__Outputs {
  _call: MultipleShotTokenRepartitionCall;

  constructor(call: MultipleShotTokenRepartitionCall) {
    this._call = call;
  }
}

export class PassPeriodCall extends EthereumCall {
  get inputs(): PassPeriodCall__Inputs {
    return new PassPeriodCall__Inputs(this);
  }

  get outputs(): PassPeriodCall__Outputs {
    return new PassPeriodCall__Outputs(this);
  }
}

export class PassPeriodCall__Inputs {
  _call: PassPeriodCall;

  constructor(call: PassPeriodCall) {
    this._call = call;
  }
}

export class PassPeriodCall__Outputs {
  _call: PassPeriodCall;

  constructor(call: PassPeriodCall) {
    this._call = call;
  }
}

export class SetRngCall extends EthereumCall {
  get inputs(): SetRngCall__Inputs {
    return new SetRngCall__Inputs(this);
  }

  get outputs(): SetRngCall__Outputs {
    return new SetRngCall__Outputs(this);
  }
}

export class SetRngCall__Inputs {
  _call: SetRngCall;

  constructor(call: SetRngCall) {
    this._call = call;
  }

  get _rng(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRngCall__Outputs {
  _call: SetRngCall;

  constructor(call: SetRngCall) {
    this._call = call;
  }
}

export class CreateDisputeCall extends EthereumCall {
  get inputs(): CreateDisputeCall__Inputs {
    return new CreateDisputeCall__Inputs(this);
  }

  get outputs(): CreateDisputeCall__Outputs {
    return new CreateDisputeCall__Outputs(this);
  }
}

export class CreateDisputeCall__Inputs {
  _call: CreateDisputeCall;

  constructor(call: CreateDisputeCall) {
    this._call = call;
  }

  get _choices(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _extraData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class CreateDisputeCall__Outputs {
  _call: CreateDisputeCall;

  constructor(call: CreateDisputeCall) {
    this._call = call;
  }

  get disputeID(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class OneShotTokenRepartitionCall extends EthereumCall {
  get inputs(): OneShotTokenRepartitionCall__Inputs {
    return new OneShotTokenRepartitionCall__Inputs(this);
  }

  get outputs(): OneShotTokenRepartitionCall__Outputs {
    return new OneShotTokenRepartitionCall__Outputs(this);
  }
}

export class OneShotTokenRepartitionCall__Inputs {
  _call: OneShotTokenRepartitionCall;

  constructor(call: OneShotTokenRepartitionCall) {
    this._call = call;
  }

  get _disputeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class OneShotTokenRepartitionCall__Outputs {
  _call: OneShotTokenRepartitionCall;

  constructor(call: OneShotTokenRepartitionCall) {
    this._call = call;
  }
}

export class SetGovernorCall extends EthereumCall {
  get inputs(): SetGovernorCall__Inputs {
    return new SetGovernorCall__Inputs(this);
  }

  get outputs(): SetGovernorCall__Outputs {
    return new SetGovernorCall__Outputs(this);
  }
}

export class SetGovernorCall__Inputs {
  _call: SetGovernorCall;

  constructor(call: SetGovernorCall) {
    this._call = call;
  }

  get _governor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetGovernorCall__Outputs {
  _call: SetGovernorCall;

  constructor(call: SetGovernorCall) {
    this._call = call;
  }
}

export class PenalizeInactiveJurorCall extends EthereumCall {
  get inputs(): PenalizeInactiveJurorCall__Inputs {
    return new PenalizeInactiveJurorCall__Inputs(this);
  }

  get outputs(): PenalizeInactiveJurorCall__Outputs {
    return new PenalizeInactiveJurorCall__Outputs(this);
  }
}

export class PenalizeInactiveJurorCall__Inputs {
  _call: PenalizeInactiveJurorCall;

  constructor(call: PenalizeInactiveJurorCall) {
    this._call = call;
  }

  get _jurorAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _disputeID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _draws(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class PenalizeInactiveJurorCall__Outputs {
  _call: PenalizeInactiveJurorCall;

  constructor(call: PenalizeInactiveJurorCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _pinakion(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _rng(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _timePerPeriod(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _governor(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
