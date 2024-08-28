import React, { useState, ReactNode, isValidElement } from "react";
import Select, { MultiValue, SingleValue } from "react-select";

export type SelectChildProps = {
  children: ReactNode;
  value: string;
  hint: string;
};

interface CustomSelectProps {
  children: ReactNode; // Include any additional props you may want to pass down to react-select
  isMulti?: boolean;
  [key: string]: unknown;
}

interface OptionType {
  label?: string;
  value?: string;
  hint?: string;
}

// Custom Select-child component
export const SelectChild = ({ children, value, hint }: SelectChildProps) => {
  return { label: children, value, hint };
};

// Custom Select component
export const CustomSelect: React.FC<CustomSelectProps> = ({
  children,
  isMulti = false,
  ...props
}) => {
  // State to hold the selected options (for multi-select)
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

  // Map through the children and convert them to react-select options
  const options: OptionType[] | undefined = React.Children.map(
    children,
    (child) => {
      // Check if the child is a valid React element
      if (isValidElement(child)) {
        return {
          label: child.props.children,
          value: child.props.value,
          hint: child.props.hint,
        };
      }
      // If the child is not a valid React element, return null (or handle differently if needed)
      return null;
    },
  )?.filter(Boolean) as OptionType[]; // Filter out any null values

  // Handle selection change for multi-select
  const handleChange = (
    selected: MultiValue<OptionType> | SingleValue<OptionType>,
  ) => {
    if (isMulti && Array.isArray(selected)) {
      setSelectedOptions(selected);
    } else if (selected) {
      setSelectedOptions([selected]);
    } else {
      setSelectedOptions([]);
    }
  };

  return (
    <div>
      <Select
        options={options}
        isMulti={isMulti}
        onChange={handleChange}
        {...props}
      />
      {/* Conditionally render the hint boxes below the select */}
      {selectedOptions.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          {selectedOptions.map((option) => (
            <div
              key={option.value}
              style={{
                padding: "10px",
                backgroundColor: "#f0f0f0",
                borderRadius: "5px",
                marginBottom: "5px",
              }}
            >
              {option.hint}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// import React, { useState, ReactNode, isValidElement } from "react";
// import Select, { MultiValue, SingleValue } from "react-select";

// export type SelectChildProps = {
//   children: ReactNode;
//   value: string;
//   hint: string;
// };

// interface CustomSelectProps {
//   children: ReactNode;
//   // Include any additional props you may want to pass down to react-select
//   isMulti?: boolean;
//   [key: string]: unknown;
// }

// interface OptionType {
//   label?: string;
//   value?: string;
//   hint?: string;
// }

// // Custom Select-child component
// export const SelectChild = ({ children, value, hint }: SelectChildProps) => {
//   return { label: children, value, hint };
// };

// // Custom Select component
// export const CustomSelect: React.FC<CustomSelectProps> = ({
//   children,
//   isMulti = false,
//   ...props
// }) => {
//   // State to hold the selected options (for multi-select)
//   const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

//   // Map through the children and convert them to react-select options
//   const options: OptionType[] | undefined = React.Children.map(
//     children,
//     (child) => {
//       // Check if the child is a valid React element
//       if (isValidElement(child)) {
//         return {
//           label: child.props.children,
//           value: child.props.value,
//           hint: child.props.hint,
//         };
//       }
//       // If the child is not a valid React element, return null (or handle differently if needed)
//       return null;
//     },
//   )?.filter(Boolean); // Filter out any null values

//   // Handle selection change for multi-select
//   const handleChange = (
//     selected: MultiValue<OptionType> | SingleValue<OptionType>,
//   ) => {
//     if (Array.isArray(selected)) {
//       setSelectedOptions(selected);
//     } else if (selected) {
//       setSelectedOptions([selected ]);
//     } else {
//       setSelectedOptions([]);
//     }
//   };

//   return (
//     <div>
//       <Select
//         options={options}
//         isMulti={isMulti}
//         onChange={handleChange}
//         {...props}
//       />
//       {/* Conditionally render the hint boxes below the select */}
//       {selectedOptions.length > 0 && (
//         <div style={{ marginTop: "10px" }}>
//           {selectedOptions.map((option) => (
//             <div
//               key={option.value}
//               style={{
//                 padding: "10px",
//                 backgroundColor: "#f0f0f0",
//                 borderRadius: "5px",
//                 marginBottom: "5px",
//               }}
//             >
//               {option.hint}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
