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

export class NewPhase extends EthereumEvent {
  get params(): NewPhase__Params {
    return new NewPhase__Params(this);
  }
}

export class NewPhase__Params {
  _event: NewPhase;

  constructor(event: NewPhase) {
    this._event = event;
  }

  get phase(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

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

  get disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get period(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class StakeSet extends EthereumEvent {
  get params(): StakeSet__Params {
    return new StakeSet__Params(this);
  }
}

export class StakeSet__Params {
  _event: StakeSet;

  constructor(event: StakeSet) {
    this._event = event;
  }

  get address(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get subcourtID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get stake(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newTotalStake(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Draw extends EthereumEvent {
  get params(): Draw__Params {
    return new Draw__Params(this);
  }
}

export class Draw__Params {
  _event: Draw;

  constructor(event: Draw) {
    this._event = event;
  }

  get address(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get disputeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get appeal(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get voteID(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class TokenAndETHShift extends EthereumEvent {
  get params(): TokenAndETHShift__Params {
    return new TokenAndETHShift__Params(this);
  }
}

export class TokenAndETHShift__Params {
  _event: TokenAndETHShift;

  constructor(event: TokenAndETHShift) {
    this._event = event;
  }

  get address(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get disputeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokenAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ETHAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
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

  get disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get arbitrable(): Address {
    return this._event.parameters[1].value.toAddress();
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

  get disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get arbitrable(): Address {
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

  get disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get arbitrable(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Contract__courtsResult {
  value0: BigInt;
  value1: boolean;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: BigInt,
    value1: boolean,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromBoolean(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    return map;
  }
}

export class Contract__getSubcourtResult {
  value0: Array<BigInt>;
  value1: Array<BigInt>;

  constructor(value0: Array<BigInt>, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigIntArray(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigIntArray(this.value1));
    return map;
  }
}

export class Contract__disputesResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: i32;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: i32,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: boolean
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
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromI32(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromBoolean(this.value7));
    return map;
  }
}

export class Contract__getVoteResult {
  value0: Address;
  value1: Bytes;
  value2: BigInt;
  value3: boolean;

  constructor(value0: Address, value1: Bytes, value2: BigInt, value3: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromFixedBytes(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromBoolean(this.value3));
    return map;
  }
}

export class Contract__appealPeriodResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Contract__delayedSetStakesResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class Contract__jurorsResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Contract__getDisputeResult {
  value0: Array<BigInt>;
  value1: Array<BigInt>;
  value2: Array<BigInt>;
  value3: Array<BigInt>;
  value4: Array<BigInt>;
  value5: Array<BigInt>;

  constructor(
    value0: Array<BigInt>,
    value1: Array<BigInt>,
    value2: Array<BigInt>,
    value3: Array<BigInt>,
    value4: Array<BigInt>,
    value5: Array<BigInt>
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigIntArray(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigIntArray(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigIntArray(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigIntArray(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigIntArray(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigIntArray(this.value5));
    return map;
  }
}

export class Contract__getVoteCounterResult {
  value0: BigInt;
  value1: Array<BigInt>;
  value2: boolean;

  constructor(value0: BigInt, value1: Array<BigInt>, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigIntArray(this.value1));
    map.set("value2", EthereumValue.fromBoolean(this.value2));
    return map;
  }
}

export class KlerosLiquid extends SmartContract {
  static bind(address: Address): KlerosLiquid {
    return new KlerosLiquid("Contract", address);
  }

  RNBlock(): BigInt {
    let result = super.call("RNBlock", []);
    return result[0].toBigInt();
  }

  disputesWithoutJurors(): BigInt {
    let result = super.call("disputesWithoutJurors", []);
    return result[0].toBigInt();
  }

  governor(): Address {
    let result = super.call("governor", []);
    return result[0].toAddress();
  }

  lastDelayedSetStake(): BigInt {
    let result = super.call("lastDelayedSetStake", []);
    return result[0].toBigInt();
  }

  disputeStatus(_disputeID: BigInt): i32 {
    let result = super.call("disputeStatus", [
      EthereumValue.fromUnsignedBigInt(_disputeID)
    ]);
    return result[0].toI32();
  }

  maxDrawingTime(): BigInt {
    let result = super.call("maxDrawingTime", []);
    return result[0].toBigInt();
  }

  currentRuling(_disputeID: BigInt): BigInt {
    let result = super.call("currentRuling", [
      EthereumValue.fromUnsignedBigInt(_disputeID)
    ]);
    return result[0].toBigInt();
  }

  courts(param0: BigInt): Contract__courtsResult {
    let result = super.call("courts", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return new Contract__courtsResult(
      result[0].toBigInt(),
      result[1].toBoolean(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  ALPHA_DIVISOR(): BigInt {
    let result = super.call("ALPHA_DIVISOR", []);
    return result[0].toBigInt();
  }

  getSubcourt(_subcourtID: BigInt): Contract__getSubcourtResult {
    let result = super.call("getSubcourt", [
      EthereumValue.fromUnsignedBigInt(_subcourtID)
    ]);
    return new Contract__getSubcourtResult(
      result[0].toBigIntArray(),
      result[1].toBigIntArray()
    );
  }

  disputes(param0: BigInt): Contract__disputesResult {
    let result = super.call("disputes", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return new Contract__disputesResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toI32(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBoolean()
    );
  }

  RN(): BigInt {
    let result = super.call("RN", []);
    return result[0].toBigInt();
  }

  RNGenerator(): Address {
    let result = super.call("RNGenerator", []);
    return result[0].toAddress();
  }

  NON_PAYABLE_AMOUNT(): BigInt {
    let result = super.call("NON_PAYABLE_AMOUNT", []);
    return result[0].toBigInt();
  }

  getVote(
    _disputeID: BigInt,
    _appeal: BigInt,
    _voteID: BigInt
  ): Contract__getVoteResult {
    let result = super.call("getVote", [
      EthereumValue.fromUnsignedBigInt(_disputeID),
      EthereumValue.fromUnsignedBigInt(_appeal),
      EthereumValue.fromUnsignedBigInt(_voteID)
    ]);
    return new Contract__getVoteResult(
      result[0].toAddress(),
      result[1].toBytes(),
      result[2].toBigInt(),
      result[3].toBoolean()
    );
  }

  stakeOf(_account: Address, _subcourtID: BigInt): BigInt {
    let result = super.call("stakeOf", [
      EthereumValue.fromAddress(_account),
      EthereumValue.fromUnsignedBigInt(_subcourtID)
    ]);
    return result[0].toBigInt();
  }

  appealPeriod(_disputeID: BigInt): Contract__appealPeriodResult {
    let result = super.call("appealPeriod", [
      EthereumValue.fromUnsignedBigInt(_disputeID)
    ]);
    return new Contract__appealPeriodResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  phase(): i32 {
    let result = super.call("phase", []);
    return result[0].toI32();
  }

  MAX_STAKE_PATHS(): BigInt {
    let result = super.call("MAX_STAKE_PATHS", []);
    return result[0].toBigInt();
  }

  delayedSetStakes(param0: BigInt): Contract__delayedSetStakesResult {
    let result = super.call("delayedSetStakes", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return new Contract__delayedSetStakesResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  lastPhaseChange(): BigInt {
    let result = super.call("lastPhaseChange", []);
    return result[0].toBigInt();
  }

  minStakingTime(): BigInt {
    let result = super.call("minStakingTime", []);
    return result[0].toBigInt();
  }

  nextDelayedSetStake(): BigInt {
    let result = super.call("nextDelayedSetStake", []);
    return result[0].toBigInt();
  }

  getJuror(_account: Address): Array<BigInt> {
    let result = super.call("getJuror", [EthereumValue.fromAddress(_account)]);
    return result[0].toBigIntArray();
  }

  jurors(param0: Address): Contract__jurorsResult {
    let result = super.call("jurors", [EthereumValue.fromAddress(param0)]);
    return new Contract__jurorsResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  getDispute(_disputeID: BigInt): Contract__getDisputeResult {
    let result = super.call("getDispute", [
      EthereumValue.fromUnsignedBigInt(_disputeID)
    ]);
    return new Contract__getDisputeResult(
      result[0].toBigIntArray(),
      result[1].toBigIntArray(),
      result[2].toBigIntArray(),
      result[3].toBigIntArray(),
      result[4].toBigIntArray(),
      result[5].toBigIntArray()
    );
  }

  getVoteCounter(
    _disputeID: BigInt,
    _appeal: BigInt
  ): Contract__getVoteCounterResult {
    let result = super.call("getVoteCounter", [
      EthereumValue.fromUnsignedBigInt(_disputeID),
      EthereumValue.fromUnsignedBigInt(_appeal)
    ]);
    return new Contract__getVoteCounterResult(
      result[0].toBigInt(),
      result[1].toBigIntArray(),
      result[2].toBoolean()
    );
  }

  MIN_JURORS(): BigInt {
    let result = super.call("MIN_JURORS", []);
    return result[0].toBigInt();
  }

  appealCost(_disputeID: BigInt, _extraData: Bytes): BigInt {
    let result = super.call("appealCost", [
      EthereumValue.fromUnsignedBigInt(_disputeID),
      EthereumValue.fromFixedBytes(_extraData)
    ]);
    return result[0].toBigInt();
  }

  lockInsolventTransfers(): boolean {
    let result = super.call("lockInsolventTransfers", []);
    return result[0].toBoolean();
  }

  arbitrationCost(_extraData: Bytes): BigInt {
    let result = super.call("arbitrationCost", [
      EthereumValue.fromFixedBytes(_extraData)
    ]);
    return result[0].toBigInt();
  }

  pinakion(): Address {
    let result = super.call("pinakion", []);
    return result[0].toAddress();
  }
}

export class ChangePinakionCall extends EthereumCall {
  get inputs(): ChangePinakionCall__Inputs {
    return new ChangePinakionCall__Inputs(this);
  }

  get outputs(): ChangePinakionCall__Outputs {
    return new ChangePinakionCall__Outputs(this);
  }
}

export class ChangePinakionCall__Inputs {
  _call: ChangePinakionCall;

  constructor(call: ChangePinakionCall) {
    this._call = call;
  }

  get _pinakion(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangePinakionCall__Outputs {
  _call: ChangePinakionCall;

  constructor(call: ChangePinakionCall) {
    this._call = call;
  }
}

export class PassPhaseCall extends EthereumCall {
  get inputs(): PassPhaseCall__Inputs {
    return new PassPhaseCall__Inputs(this);
  }

  get outputs(): PassPhaseCall__Outputs {
    return new PassPhaseCall__Outputs(this);
  }
}

export class PassPhaseCall__Inputs {
  _call: PassPhaseCall;

  constructor(call: PassPhaseCall) {
    this._call = call;
  }
}

export class PassPhaseCall__Outputs {
  _call: PassPhaseCall;

  constructor(call: PassPhaseCall) {
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

  get _disputeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PassPeriodCall__Outputs {
  _call: PassPeriodCall;

  constructor(call: PassPeriodCall) {
    this._call = call;
  }
}

export class ExecuteCall extends EthereumCall {
  get inputs(): ExecuteCall__Inputs {
    return new ExecuteCall__Inputs(this);
  }

  get outputs(): ExecuteCall__Outputs {
    return new ExecuteCall__Outputs(this);
  }
}

export class ExecuteCall__Inputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get _disputeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _appeal(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _iterations(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ExecuteCall__Outputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }
}

export class CastVoteCall extends EthereumCall {
  get inputs(): CastVoteCall__Inputs {
    return new CastVoteCall__Inputs(this);
  }

  get outputs(): CastVoteCall__Outputs {
    return new CastVoteCall__Outputs(this);
  }
}

export class CastVoteCall__Inputs {
  _call: CastVoteCall;

  constructor(call: CastVoteCall) {
    this._call = call;
  }

  get _disputeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _voteIDs(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _choice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _salt(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CastVoteCall__Outputs {
  _call: CastVoteCall;

  constructor(call: CastVoteCall) {
    this._call = call;
  }
}

export class ChangeSubcourtMinStakeCall extends EthereumCall {
  get inputs(): ChangeSubcourtMinStakeCall__Inputs {
    return new ChangeSubcourtMinStakeCall__Inputs(this);
  }

  get outputs(): ChangeSubcourtMinStakeCall__Outputs {
    return new ChangeSubcourtMinStakeCall__Outputs(this);
  }
}

export class ChangeSubcourtMinStakeCall__Inputs {
  _call: ChangeSubcourtMinStakeCall;

  constructor(call: ChangeSubcourtMinStakeCall) {
    this._call = call;
  }

  get _subcourtID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _minStake(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ChangeSubcourtMinStakeCall__Outputs {
  _call: ChangeSubcourtMinStakeCall;

  constructor(call: ChangeSubcourtMinStakeCall) {
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

export class OnTransferCall extends EthereumCall {
  get inputs(): OnTransferCall__Inputs {
    return new OnTransferCall__Inputs(this);
  }

  get outputs(): OnTransferCall__Outputs {
    return new OnTransferCall__Outputs(this);
  }
}

export class OnTransferCall__Inputs {
  _call: OnTransferCall;

  constructor(call: OnTransferCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class OnTransferCall__Outputs {
  _call: OnTransferCall;

  constructor(call: OnTransferCall) {
    this._call = call;
  }

  get allowed(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ChangeSubcourtTimesPerPeriodCall extends EthereumCall {
  get inputs(): ChangeSubcourtTimesPerPeriodCall__Inputs {
    return new ChangeSubcourtTimesPerPeriodCall__Inputs(this);
  }

  get outputs(): ChangeSubcourtTimesPerPeriodCall__Outputs {
    return new ChangeSubcourtTimesPerPeriodCall__Outputs(this);
  }
}

export class ChangeSubcourtTimesPerPeriodCall__Inputs {
  _call: ChangeSubcourtTimesPerPeriodCall;

  constructor(call: ChangeSubcourtTimesPerPeriodCall) {
    this._call = call;
  }

  get _subcourtID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _timesPerPeriod(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class ChangeSubcourtTimesPerPeriodCall__Outputs {
  _call: ChangeSubcourtTimesPerPeriodCall;

  constructor(call: ChangeSubcourtTimesPerPeriodCall) {
    this._call = call;
  }
}

export class ChangeSubcourtJurorFeeCall extends EthereumCall {
  get inputs(): ChangeSubcourtJurorFeeCall__Inputs {
    return new ChangeSubcourtJurorFeeCall__Inputs(this);
  }

  get outputs(): ChangeSubcourtJurorFeeCall__Outputs {
    return new ChangeSubcourtJurorFeeCall__Outputs(this);
  }
}

export class ChangeSubcourtJurorFeeCall__Inputs {
  _call: ChangeSubcourtJurorFeeCall;

  constructor(call: ChangeSubcourtJurorFeeCall) {
    this._call = call;
  }

  get _subcourtID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _feeForJuror(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ChangeSubcourtJurorFeeCall__Outputs {
  _call: ChangeSubcourtJurorFeeCall;

  constructor(call: ChangeSubcourtJurorFeeCall) {
    this._call = call;
  }
}

export class ChangeSubcourtAlphaCall extends EthereumCall {
  get inputs(): ChangeSubcourtAlphaCall__Inputs {
    return new ChangeSubcourtAlphaCall__Inputs(this);
  }

  get outputs(): ChangeSubcourtAlphaCall__Outputs {
    return new ChangeSubcourtAlphaCall__Outputs(this);
  }
}

export class ChangeSubcourtAlphaCall__Inputs {
  _call: ChangeSubcourtAlphaCall;

  constructor(call: ChangeSubcourtAlphaCall) {
    this._call = call;
  }

  get _subcourtID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _alpha(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ChangeSubcourtAlphaCall__Outputs {
  _call: ChangeSubcourtAlphaCall;

  constructor(call: ChangeSubcourtAlphaCall) {
    this._call = call;
  }
}

export class CastCommitCall extends EthereumCall {
  get inputs(): CastCommitCall__Inputs {
    return new CastCommitCall__Inputs(this);
  }

  get outputs(): CastCommitCall__Outputs {
    return new CastCommitCall__Outputs(this);
  }
}

export class CastCommitCall__Inputs {
  _call: CastCommitCall;

  constructor(call: CastCommitCall) {
    this._call = call;
  }

  get _disputeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _voteIDs(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _commit(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CastCommitCall__Outputs {
  _call: CastCommitCall;

  constructor(call: CastCommitCall) {
    this._call = call;
  }
}

export class ExecuteGovernorProposalCall extends EthereumCall {
  get inputs(): ExecuteGovernorProposalCall__Inputs {
    return new ExecuteGovernorProposalCall__Inputs(this);
  }

  get outputs(): ExecuteGovernorProposalCall__Outputs {
    return new ExecuteGovernorProposalCall__Outputs(this);
  }
}

export class ExecuteGovernorProposalCall__Inputs {
  _call: ExecuteGovernorProposalCall;

  constructor(call: ExecuteGovernorProposalCall) {
    this._call = call;
  }

  get _destination(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ExecuteGovernorProposalCall__Outputs {
  _call: ExecuteGovernorProposalCall;

  constructor(call: ExecuteGovernorProposalCall) {
    this._call = call;
  }
}

export class ChangeMinStakingTimeCall extends EthereumCall {
  get inputs(): ChangeMinStakingTimeCall__Inputs {
    return new ChangeMinStakingTimeCall__Inputs(this);
  }

  get outputs(): ChangeMinStakingTimeCall__Outputs {
    return new ChangeMinStakingTimeCall__Outputs(this);
  }
}

export class ChangeMinStakingTimeCall__Inputs {
  _call: ChangeMinStakingTimeCall;

  constructor(call: ChangeMinStakingTimeCall) {
    this._call = call;
  }

  get _minStakingTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeMinStakingTimeCall__Outputs {
  _call: ChangeMinStakingTimeCall;

  constructor(call: ChangeMinStakingTimeCall) {
    this._call = call;
  }
}

export class SetStakeCall extends EthereumCall {
  get inputs(): SetStakeCall__Inputs {
    return new SetStakeCall__Inputs(this);
  }

  get outputs(): SetStakeCall__Outputs {
    return new SetStakeCall__Outputs(this);
  }
}

export class SetStakeCall__Inputs {
  _call: SetStakeCall;

  constructor(call: SetStakeCall) {
    this._call = call;
  }

  get _subcourtID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _stake(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetStakeCall__Outputs {
  _call: SetStakeCall;

  constructor(call: SetStakeCall) {
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

  get _disputeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExecuteRulingCall__Outputs {
  _call: ExecuteRulingCall;

  constructor(call: ExecuteRulingCall) {
    this._call = call;
  }
}

export class ChangeRNGeneratorCall extends EthereumCall {
  get inputs(): ChangeRNGeneratorCall__Inputs {
    return new ChangeRNGeneratorCall__Inputs(this);
  }

  get outputs(): ChangeRNGeneratorCall__Outputs {
    return new ChangeRNGeneratorCall__Outputs(this);
  }
}

export class ChangeRNGeneratorCall__Inputs {
  _call: ChangeRNGeneratorCall;

  constructor(call: ChangeRNGeneratorCall) {
    this._call = call;
  }

  get _RNGenerator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeRNGeneratorCall__Outputs {
  _call: ChangeRNGeneratorCall;

  constructor(call: ChangeRNGeneratorCall) {
    this._call = call;
  }
}

export class ExecuteDelayedSetStakesCall extends EthereumCall {
  get inputs(): ExecuteDelayedSetStakesCall__Inputs {
    return new ExecuteDelayedSetStakesCall__Inputs(this);
  }

  get outputs(): ExecuteDelayedSetStakesCall__Outputs {
    return new ExecuteDelayedSetStakesCall__Outputs(this);
  }
}

export class ExecuteDelayedSetStakesCall__Inputs {
  _call: ExecuteDelayedSetStakesCall;

  constructor(call: ExecuteDelayedSetStakesCall) {
    this._call = call;
  }

  get _iterations(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExecuteDelayedSetStakesCall__Outputs {
  _call: ExecuteDelayedSetStakesCall;

  constructor(call: ExecuteDelayedSetStakesCall) {
    this._call = call;
  }
}

export class ChangeSubcourtJurorsForJumpCall extends EthereumCall {
  get inputs(): ChangeSubcourtJurorsForJumpCall__Inputs {
    return new ChangeSubcourtJurorsForJumpCall__Inputs(this);
  }

  get outputs(): ChangeSubcourtJurorsForJumpCall__Outputs {
    return new ChangeSubcourtJurorsForJumpCall__Outputs(this);
  }
}

export class ChangeSubcourtJurorsForJumpCall__Inputs {
  _call: ChangeSubcourtJurorsForJumpCall;

  constructor(call: ChangeSubcourtJurorsForJumpCall) {
    this._call = call;
  }

  get _subcourtID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _jurorsForCourtJump(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ChangeSubcourtJurorsForJumpCall__Outputs {
  _call: ChangeSubcourtJurorsForJumpCall;

  constructor(call: ChangeSubcourtJurorsForJumpCall) {
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

  get _numberOfChoices(): BigInt {
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

export class DrawJurorsCall extends EthereumCall {
  get inputs(): DrawJurorsCall__Inputs {
    return new DrawJurorsCall__Inputs(this);
  }

  get outputs(): DrawJurorsCall__Outputs {
    return new DrawJurorsCall__Outputs(this);
  }
}

export class DrawJurorsCall__Inputs {
  _call: DrawJurorsCall;

  constructor(call: DrawJurorsCall) {
    this._call = call;
  }

  get _disputeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _iterations(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DrawJurorsCall__Outputs {
  _call: DrawJurorsCall;

  constructor(call: DrawJurorsCall) {
    this._call = call;
  }
}

export class CreateSubcourtCall extends EthereumCall {
  get inputs(): CreateSubcourtCall__Inputs {
    return new CreateSubcourtCall__Inputs(this);
  }

  get outputs(): CreateSubcourtCall__Outputs {
    return new CreateSubcourtCall__Outputs(this);
  }
}

export class CreateSubcourtCall__Inputs {
  _call: CreateSubcourtCall;

  constructor(call: CreateSubcourtCall) {
    this._call = call;
  }

  get _parent(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _hiddenVotes(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get _minStake(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _alpha(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _feeForJuror(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _jurorsForCourtJump(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _timesPerPeriod(): Array<BigInt> {
    return this._call.inputValues[6].value.toBigIntArray();
  }

  get _sortitionSumTreeK(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class CreateSubcourtCall__Outputs {
  _call: CreateSubcourtCall;

  constructor(call: CreateSubcourtCall) {
    this._call = call;
  }
}

export class OnApproveCall extends EthereumCall {
  get inputs(): OnApproveCall__Inputs {
    return new OnApproveCall__Inputs(this);
  }

  get outputs(): OnApproveCall__Outputs {
    return new OnApproveCall__Outputs(this);
  }
}

export class OnApproveCall__Inputs {
  _call: OnApproveCall;

  constructor(call: OnApproveCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _spender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class OnApproveCall__Outputs {
  _call: OnApproveCall;

  constructor(call: OnApproveCall) {
    this._call = call;
  }

  get allowed(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ChangeMaxDrawingTimeCall extends EthereumCall {
  get inputs(): ChangeMaxDrawingTimeCall__Inputs {
    return new ChangeMaxDrawingTimeCall__Inputs(this);
  }

  get outputs(): ChangeMaxDrawingTimeCall__Outputs {
    return new ChangeMaxDrawingTimeCall__Outputs(this);
  }
}

export class ChangeMaxDrawingTimeCall__Inputs {
  _call: ChangeMaxDrawingTimeCall;

  constructor(call: ChangeMaxDrawingTimeCall) {
    this._call = call;
  }

  get _maxDrawingTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeMaxDrawingTimeCall__Outputs {
  _call: ChangeMaxDrawingTimeCall;

  constructor(call: ChangeMaxDrawingTimeCall) {
    this._call = call;
  }
}

export class ChangeGovernorCall extends EthereumCall {
  get inputs(): ChangeGovernorCall__Inputs {
    return new ChangeGovernorCall__Inputs(this);
  }

  get outputs(): ChangeGovernorCall__Outputs {
    return new ChangeGovernorCall__Outputs(this);
  }
}

export class ChangeGovernorCall__Inputs {
  _call: ChangeGovernorCall;

  constructor(call: ChangeGovernorCall) {
    this._call = call;
  }

  get _governor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeGovernorCall__Outputs {
  _call: ChangeGovernorCall;

  constructor(call: ChangeGovernorCall) {
    this._call = call;
  }
}

export class ProxyPaymentCall extends EthereumCall {
  get inputs(): ProxyPaymentCall__Inputs {
    return new ProxyPaymentCall__Inputs(this);
  }

  get outputs(): ProxyPaymentCall__Outputs {
    return new ProxyPaymentCall__Outputs(this);
  }
}

export class ProxyPaymentCall__Inputs {
  _call: ProxyPaymentCall;

  constructor(call: ProxyPaymentCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ProxyPaymentCall__Outputs {
  _call: ProxyPaymentCall;

  constructor(call: ProxyPaymentCall) {
    this._call = call;
  }

  get allowed(): boolean {
    return this._call.outputValues[0].value.toBoolean();
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

  get _governor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _pinakion(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _RNGenerator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _minStakingTime(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _maxDrawingTime(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _hiddenVotes(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }

  get _minStake(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _alpha(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _feeForJuror(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get _jurorsForCourtJump(): BigInt {
    return this._call.inputValues[9].value.toBigInt();
  }

  get _timesPerPeriod(): Array<BigInt> {
    return this._call.inputValues[10].value.toBigIntArray();
  }

  get _sortitionSumTreeK(): BigInt {
    return this._call.inputValues[11].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
