/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateProducts: OnCreateProductsSubscription;
  onUpdateProducts: OnUpdateProductsSubscription;
  onDeleteProducts: OnDeleteProductsSubscription;
};

export type CreateProductsInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
};

export type ModelProductsConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  price?: ModelIntInput | null;
  quantity?: ModelIntInput | null;
  and?: Array<ModelProductsConditionInput | null> | null;
  or?: Array<ModelProductsConditionInput | null> | null;
  not?: ModelProductsConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Products = {
  __typename: "Products";
  id: string;
  name: string;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProductsInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
};

export type DeleteProductsInput = {
  id: string;
};

export type ModelProductsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  price?: ModelIntInput | null;
  quantity?: ModelIntInput | null;
  and?: Array<ModelProductsFilterInput | null> | null;
  or?: Array<ModelProductsFilterInput | null> | null;
  not?: ModelProductsFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelProductsConnection = {
  __typename: "ModelProductsConnection";
  items: Array<Products | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionProductsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  price?: ModelSubscriptionIntInput | null;
  quantity?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionProductsFilterInput | null> | null;
  or?: Array<ModelSubscriptionProductsFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type CreateProductsMutation = {
  __typename: "Products";
  id: string;
  name: string;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProductsMutation = {
  __typename: "Products";
  id: string;
  name: string;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProductsMutation = {
  __typename: "Products";
  id: string;
  name: string;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type GetProductsQuery = {
  __typename: "Products";
  id: string;
  name: string;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProductsQuery = {
  __typename: "ModelProductsConnection";
  items: Array<{
    __typename: "Products";
    id: string;
    name: string;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateProductsSubscription = {
  __typename: "Products";
  id: string;
  name: string;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProductsSubscription = {
  __typename: "Products";
  id: string;
  name: string;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProductsSubscription = {
  __typename: "Products";
  id: string;
  name: string;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProducts(
    input: CreateProductsInput,
    condition?: ModelProductsConditionInput
  ): Promise<CreateProductsMutation> {
    const statement = `mutation CreateProducts($input: CreateProductsInput!, $condition: ModelProductsConditionInput) {
        createProducts(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          price
          quantity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProductsMutation>response.data.createProducts;
  }
  async UpdateProducts(
    input: UpdateProductsInput,
    condition?: ModelProductsConditionInput
  ): Promise<UpdateProductsMutation> {
    const statement = `mutation UpdateProducts($input: UpdateProductsInput!, $condition: ModelProductsConditionInput) {
        updateProducts(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          price
          quantity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProductsMutation>response.data.updateProducts;
  }
  async DeleteProducts(
    input: DeleteProductsInput,
    condition?: ModelProductsConditionInput
  ): Promise<DeleteProductsMutation> {
    const statement = `mutation DeleteProducts($input: DeleteProductsInput!, $condition: ModelProductsConditionInput) {
        deleteProducts(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          price
          quantity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProductsMutation>response.data.deleteProducts;
  }
  async GetProducts(id: string): Promise<GetProductsQuery> {
    const statement = `query GetProducts($id: ID!) {
        getProducts(id: $id) {
          __typename
          id
          name
          description
          price
          quantity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProductsQuery>response.data.getProducts;
  }
  async ListProducts(
    filter?: ModelProductsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProductsQuery> {
    const statement = `query ListProducts($filter: ModelProductsFilterInput, $limit: Int, $nextToken: String) {
        listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            price
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProductsQuery>response.data.listProducts;
  }
  OnCreateProductsListener(
    filter?: ModelSubscriptionProductsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProducts">>
  > {
    const statement = `subscription OnCreateProducts($filter: ModelSubscriptionProductsFilterInput) {
        onCreateProducts(filter: $filter) {
          __typename
          id
          name
          description
          price
          quantity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProducts">>
    >;
  }

  OnUpdateProductsListener(
    filter?: ModelSubscriptionProductsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProducts">>
  > {
    const statement = `subscription OnUpdateProducts($filter: ModelSubscriptionProductsFilterInput) {
        onUpdateProducts(filter: $filter) {
          __typename
          id
          name
          description
          price
          quantity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProducts">>
    >;
  }

  OnDeleteProductsListener(
    filter?: ModelSubscriptionProductsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProducts">>
  > {
    const statement = `subscription OnDeleteProducts($filter: ModelSubscriptionProductsFilterInput) {
        onDeleteProducts(filter: $filter) {
          __typename
          id
          name
          description
          price
          quantity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProducts">>
    >;
  }
}
