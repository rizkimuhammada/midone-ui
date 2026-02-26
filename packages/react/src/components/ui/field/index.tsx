import { cn } from "@midoneui/core/utils/cn";
import {
    fieldVariants,
    fieldContent,
    fieldDescription,
    fieldError,
    fieldGroup,
    fieldLabel,
    fieldLegend,
    fieldSeparator,
    fieldSet,
    fieldTitle,
    type FieldVariants,
} from "@midoneui/core/styles/field.styles";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { useMemo } from "react";

export function Field({
    className,
    children,
    orientation = "vertical",
    ...props
}: React.ComponentProps<"div"> & FieldVariants) {
    return (
        <div
            role="group"
            data-part="field"
            data-orientation={orientation}
            className={cn(fieldVariants({ orientation }), className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function FieldContent({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-part="field-content"
            className={cn(fieldContent, className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function FieldDescription({
    className,
    children,
    ...props
}: React.ComponentProps<"p">) {
    return (
        <p
            data-part="field-description"
            className={cn(fieldDescription, className)}
            {...props}
        >
            {children}
        </p>
    );
}

export function FieldError({
    className,
    children,
    errors,
    ...props
}: React.ComponentProps<"div"> & {
    errors?: Array<{ message?: string } | undefined>;
}) {
    const uniqueErrors = useMemo(() => {
        const err = [
            ...new Map(errors?.map((error) => [error?.message, error])).values(),
        ];
        if (err?.length == 1) {
            return err[0]?.message;
        }
    }, [errors]);

    return (
        <div
            role="alert"
            data-part="field-error"
            className={cn(fieldError, className)}
            {...props}
        >
            {children ? (
                children
            ) : (
                <ul>
                    {Array.isArray(uniqueErrors)
                        ? uniqueErrors.map((error, index) => (
                            <li key={index}>{error?.message}</li>
                        ))
                        : uniqueErrors}
                </ul>
            )}
        </div>
    );
}

export function FieldGroup({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-part="field-group"
            className={cn(fieldGroup, className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function FieldLabel({
    className,
    children,
    ...props
}: React.ComponentProps<"label">) {
    return (
        <Label
            data-part="field-label"
            className={cn(fieldLabel, className)}
            {...props}
        >
            {children}
        </Label>
    );
}

export function FieldLegend({
    className,
    children,
    variant = "legend",
    ...props
}: React.ComponentProps<"legend"> & {
    variant?: "legend" | "label";
}) {
    return (
        <legend
            data-part="field-legend"
            data-variant={variant}
            className={cn(fieldLegend, className)}
            {...props}
        >
            {children}
        </legend>
    );
}

export function FieldSeparator({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-part="field-separator"
            data-content={!!children || undefined}
            className={cn(fieldSeparator, className)}
            {...props}
        >
            <Separator className="absolute inset-0 top-1/2" />
            {children && (
                <span data-part="field-separator-content">{children}</span>
            )}
        </div>
    );
}

export function FieldSet({
    className,
    children,
    ...props
}: React.ComponentProps<"fieldset">) {
    return (
        <fieldset
            data-part="field-set"
            className={cn(fieldSet, className)}
            {...props}
        >
            {children}
        </fieldset>
    );
}

export function FieldTitle({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-part="field-label"
            className={cn(fieldTitle, className)}
            {...props}
        >
            {children}
        </div>
    );
}
