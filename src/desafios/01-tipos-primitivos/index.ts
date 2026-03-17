// Explícitos
const is_text: string = "Essa const e uma string";
const is_numbers: number = 12;
const is_active: boolean = false;
const is_null: null = null;
const is_undefined: undefined = undefined;
const is_bigint: bigint = 9007199254740993n;
const is_symbol: symbol = Symbol("id");

// Inferência de tipo
const text = "string";
const number = 22;
const active = true;
const nullValue = null;
const undefinedValue = undefined;
const big = 10n;
const sym = Symbol("Sym");

// Any (Errado -> Certo)
let is_any: any = "string";
let is_string: string = "string";

// Arrays
let array_string: string[] = ["teste1", "teste3,", "teste3"];
let array_numbers: number[] = [1, 2, 3];
let array_union_type: (number | string)[] = ["teste1", 2, 3];

// Tupla
let tupla_person: [id: number, name: string] = [1, "Nikolas"];

function logValue(label: string, value: unknown) {
  console.log(`${label}:`, value, "| typeof:", typeof value);
}

console.log("===== EXPLÍCITOS =====");
logValue("is_text", is_text);
logValue("is_numbers", is_numbers);
logValue("is_active", is_active);
logValue("is_null", is_null); // typeof: "object" (quirk do JS)
logValue("is_undefined", is_undefined);
logValue("is_bigint", is_bigint);
logValue("is_symbol", is_symbol);

console.log("\n===== INFERÊNCIA =====");
logValue("text", text);
logValue("number", number);
logValue("active", active);
logValue("nullValue", nullValue);
logValue("undefinedValue", undefinedValue);
logValue("big", big);
logValue("sym", sym);

console.log("\n===== ANY (ERRADO -> CERTO) =====");
logValue("is_any", is_any);
logValue("is_string", is_string);

console.log("\n===== ARRAYS =====");
logValue("array_string", array_string);
logValue("array_numbers", array_numbers);
logValue("array_union_type", array_union_type);

console.log("\n===== TUPLA =====");
logValue("tupla_person", tupla_person);
