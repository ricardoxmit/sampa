/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Ricardo(props) {
  const { house, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="562px"
      height="486px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        width="562px"
        height="319px"
        position="absolute"
        left="0px"
        top="0px"
        padding="0px 0px 0px 0px"
        src={house?.photo}
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        left="33px"
        top="383px"
        padding="0px 0px 0px 0px"
        children={house?.address}
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
