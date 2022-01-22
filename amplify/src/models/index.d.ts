import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HOUSESMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class HOUSES {
  readonly id: string;
  readonly address?: string;
  readonly photo?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<HOUSES, HOUSESMetaData>);
  static copyOf(source: HOUSES, mutator: (draft: MutableModel<HOUSES, HOUSESMetaData>) => MutableModel<HOUSES, HOUSESMetaData> | void): HOUSES;
}