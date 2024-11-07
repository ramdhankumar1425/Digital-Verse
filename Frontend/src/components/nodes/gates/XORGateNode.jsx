import React from "react";
import { Handle, Position } from "@xyflow/react";

const XorGateNode = () => {
    return (
        <div className="relative">
            {/* SVG */}
            <svg width="50" height="50" viewBox="0 0 50 50">
                <path
                    d="M 5 1 C 5 1, 25 1, 50 25 C 50 25, 25 49, 5 49 C 5 49, 20 25, 5 1"
                    fill="white"
                    stroke="black"
                    strokeWidth="3"
                />
                <path
                    d="M 0 1 C 0 1, 15 25, 0 49"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                />
            </svg>

            {/* Input handle on the left side */}
            <Handle
                type="target"
                id="in1"
                position={Position.Left}
                className="bg-[#555] hover:bg-green-500"
                style={{ position: "absolute", top: "13px" }}
            />
            <Handle
                type="target"
                id="in2"
                position={Position.Left}
                className="bg-[#555] hover:bg-green-500"
                style={{ position: "absolute", top: "37px" }}
            />

            {/* Output handle on the right side */}
            <Handle
                type="source"
                id="out"
                position={Position.Right}
                className="bg-[#555] hover:bg-green-500"
            />
        </div>
    );
};

export default XorGateNode;