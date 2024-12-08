import { forwardRef, useImperativeHandle, useRef } from "react";
import { Tab, TabProps } from "react-aria-components";

export const CustomTab = forwardRef<HTMLDivElement, TabProps>(
    ({ ...props }, forwardedRef) => {
        const ref = useRef<HTMLDivElement | null>(null);

        useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement);

        return <Tab {...props} ref={ref} />;
    }
);

CustomTab.displayName = "CustomTab";
