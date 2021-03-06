import React from "react";
import {
    CardClassNameContract,
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-base";

/**
 * Card HTML tags
 */
export enum CardTag {
    article = "article",
    div = "div",
    section = "section",
}

export type CardManagedClasses = ManagedClasses<CardClassNameContract>;
export type CardUnhandledProps = React.HTMLAttributes<HTMLDivElement | HTMLElement>;
export interface CardHandledProps extends CardManagedClasses {
    /**
     * The card children
     */
    children?: React.ReactNode;

    /**
     * Use the appropriate HTML tag type depending on context
     */
    tag?: CardTag;
}

export type CardProps = CardHandledProps & CardUnhandledProps;
