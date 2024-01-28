"use client";

import DropDownIcon from "@/components/Icon/DropDownIcon";
import cn from "@/utils/style/cn";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren, useCallback, useState } from "react";
import TextInput from "../Text/TextInput";
import TextPlaceholder from "../Text/TextPlaceholder";

interface Options {
  id: string;
  name: string;
  value: string;
}

type PlaceHolderType = Pick<Options, "name">;

interface SelectorProps {
  placeHolder: PlaceHolderType;
  initialData?: Options | null;
  options: Options[];
  className?: string;
  containerClassName?: string;
  onChange?: (selectedData: Options | null) => void;
}
const Selector: React.FC<PropsWithChildren<SelectorProps>> = ({
  initialData,
  placeHolder,
  options,
  className = "",
  containerClassName = "",
  onChange,
}) => {
  const [selectedData, setSelectedData] = useState<Options | null>(
    initialData ?? null
  );

  const handleOnChange = useCallback(
    (data: Options) => {
      setSelectedData((prev) =>
        !prev ? data : prev?.id === data.id ? null : data
      );
      if (onChange) {
        onChange(data);
      }
    },
    [onChange]
  );

  return (
    <div className={cn("relative", containerClassName)}>
      <Listbox value={selectedData} onChange={handleOnChange}>
        <Listbox.Button
          className={cn(
            "px-[12px] flex justify-center items-center gap-x-[3px]",
            className
          )}
        >
          {!selectedData ? (
            <>
              <TextPlaceholder>{placeHolder.name}</TextPlaceholder>
              <DropDownIcon className="inline-block w-[11px] h-[11px] text-placeholder" />
            </>
          ) : (
            <>
              <TextInput className="block w-full md:max-w-[50px] truncate">
                {selectedData.name}
              </TextInput>
              <DropDownIcon className="inline-block w-[11px] h-[11px] text-placeholder" />
            </>
          )}
        </Listbox.Button>

        <Transition
          as={Fragment}
          enter="transition ease-in duration-100"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-0"
        >
          <Listbox.Options
            className={cn(
              "absolute py-1 mt-[38px] overflow-auto text-base bg-white rounded-md w-full md:w-auto max-h-[320px] z-30"
            )}
          >
            {options?.map((list, listIdx) => (
              <Listbox.Option
                key={list.id}
                className={({ active }) =>
                  cn("relative cursor-default select-none py-2 px-4")
                }
                value={list}
              >
                {({ selected }) => (
                  <>
                    <TextInput
                      className={cn(
                        "block",
                        selected
                          ? "underline font-medium"
                          : "font-normal opacity-50"
                      )}
                    >
                      {list.name}
                    </TextInput>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default Selector;
