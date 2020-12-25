import React, {memo, forwardRef} from "react";

const Test = () => (
    <div>
        <div>11</div>
        <div>22</div>
    </div>
);

export default memo(forwardRef(Test));
