export default `import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function App() {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute 
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "test"
  });
  
  // trigger validation at the field array level
  // useEffect(() => {
  //   if (fields) trigger('test'); // with resolver
  //   if (!fields.length) setError('miniLength, 'at least 1 field array item'); // build-in validator
  // }, [trigger, fields])

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input
              name={\`test[\${index}].firstName\`}
              ref={register()}
              defaultValue={item.firstName} // make sure to set up defaultValue
            />

            <Controller
              as={<input />}
              name={\`test[\${index}].lastName\`}
              control={control}
              defaultValue={item.lastName} // make sure to set up defaultValue
            />

            <button type="button" onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append({ firstName: "appendBill", lastName: "appendLuo" })}
      >
        append
      </button>
      <button
        type="button"
        onClick={() => prepend({ firstName: "prependFirstName", lastName: "prependLastName" })}
      >
        prepend
      </button>
      <input type="submit" />
    </form>
  );
`
