declare module FIREFLYX {
    const ToGammaSpace: number;
    const ToLinearSpace = 2.2;
    const Epsilon = 0.001;
    /**
     * Class used to hold a RBG color
     */
    class Color3 {
        /**
         * Defines the red component (between 0 and 1, default is 0)
         */
        r: number;
        /**
         * Defines the green component (between 0 and 1, default is 0)
         */
        g: number;
        /**
         * Defines the blue component (between 0 and 1, default is 0)
         */
        b: number;
        /**
         * Creates a new Color3 object from red, green, blue values, all between 0 and 1
         * @param r defines the red component (between 0 and 1, default is 0)
         * @param g defines the green component (between 0 and 1, default is 0)
         * @param b defines the blue component (between 0 and 1, default is 0)
         */
        constructor(
        /**
         * Defines the red component (between 0 and 1, default is 0)
         */
        r?: number, 
        /**
         * Defines the green component (between 0 and 1, default is 0)
         */
        g?: number, 
        /**
         * Defines the blue component (between 0 and 1, default is 0)
         */
        b?: number);
        /**
         * Creates a string with the Color3 current values
         * @returns the string representation of the Color3 object
         */
        toString(): string;
        /**
         * Returns the string "Color3"
         * @returns "Color3"
         */
        getClassName(): string;
        /**
         * Compute the Color3 hash code
         * @returns an unique number that can be used to hash Color3 objects
         */
        getHashCode(): number;
        /**
         * Stores in the given array from the given starting index the red, green, blue values as successive elements
         * @param array defines the array where to store the r,g,b components
         * @param index defines an optional index in the target array to define where to start storing values
         * @returns the current Color3 object
         */
        toArray(array: FloatArray, index?: number): Color3;
        /**
         * Returns a new {BABYLON.Color4} object from the current Color3 and the given alpha
         * @param alpha defines the alpha component on the new {BABYLON.Color4} object (default is 1)
         * @returns a new {BABYLON.Color4} object
         */
        toColor4(alpha?: number): Color4;
        /**
         * Returns a new array populated with 3 numeric elements : red, green and blue values
         * @returns the new array
         */
        asArray(): number[];
        /**
         * Returns the luminance value
         * @returns a float value
         */
        toLuminance(): number;
        /**
         * Multiply each Color3 rgb values by the given Color3 rgb values in a new Color3 object
         * @param otherColor defines the second operand
         * @returns the new Color3 object
         */
        multiply(otherColor: Color3): Color3;
        /**
         * Multiply the rgb values of the Color3 and the given Color3 and stores the result in the object "result"
         * @param otherColor defines the second operand
         * @param result defines the Color3 object where to store the result
         * @returns the current Color3
         */
        multiplyToRef(otherColor: Color3, result: Color3): Color3;
        /**
         * Determines equality between Color3 objects
         * @param otherColor defines the second operand
         * @returns true if the rgb values are equal to the given ones
         */
        equals(otherColor: Color3): boolean;
        /**
         * Determines equality between the current Color3 object and a set of r,b,g values
         * @param r defines the red component to check
         * @param g defines the green component to check
         * @param b defines the blue component to check
         * @returns true if the rgb values are equal to the given ones
         */
        equalsFloats(r: number, g: number, b: number): boolean;
        /**
         * Multiplies in place each rgb value by scale
         * @param scale defines the scaling factor
         * @returns the updated Color3
         */
        scale(scale: number): Color3;
        /**
         * Multiplies the rgb values by scale and stores the result into "result"
         * @param scale defines the scaling factor
         * @param result defines the Color3 object where to store the result
         * @returns the unmodified current Color3
         */
        scaleToRef(scale: number, result: Color3): Color3;
        /**
         * Scale the current Color3 values by a factor and add the result to a given Color3
         * @param scale defines the scale factor
         * @param result defines color to store the result into
         * @returns the unmodified current Color3
         */
        scaleAndAddToRef(scale: number, result: Color3): Color3;
        /**
         * Clamps the rgb values by the min and max values and stores the result into "result"
         * @param min defines minimum clamping value (default is 0)
         * @param max defines maximum clamping value (default is 1)
         * @param result defines color to store the result into
         * @returns the original Color3
         */
        clampToRef(min: number | undefined, max: number | undefined, result: Color3): Color3;
        /**
         * Creates a new Color3 set with the added values of the current Color3 and of the given one
         * @param otherColor defines the second operand
         * @returns the new Color3
         */
        add(otherColor: Color3): Color3;
        /**
         * Stores the result of the addition of the current Color3 and given one rgb values into "result"
         * @param otherColor defines the second operand
         * @param result defines Color3 object to store the result into
         * @returns the unmodified current Color3
         */
        addToRef(otherColor: Color3, result: Color3): Color3;
        /**
         * Returns a new Color3 set with the subtracted values of the given one from the current Color3
         * @param otherColor defines the second operand
         * @returns the new Color3
         */
        subtract(otherColor: Color3): Color3;
        /**
         * Stores the result of the subtraction of given one from the current Color3 rgb values into "result"
         * @param otherColor defines the second operand
         * @param result defines Color3 object to store the result into
         * @returns the unmodified current Color3
         */
        subtractToRef(otherColor: Color3, result: Color3): Color3;
        /**
         * Copy the current object
         * @returns a new Color3 copied the current one
         */
        clone(): Color3;
        /**
         * Copies the rgb values from the source in the current Color3
         * @param source defines the source Color3 object
         * @returns the updated Color3 object
         */
        copyFrom(source: Color3): Color3;
        /**
         * Updates the Color3 rgb values from the given floats
         * @param r defines the red component to read from
         * @param g defines the green component to read from
         * @param b defines the blue component to read from
         * @returns the current Color3 object
         */
        copyFromFloats(r: number, g: number, b: number): Color3;
        /**
         * Updates the Color3 rgb values from the given floats
         * @param r defines the red component to read from
         * @param g defines the green component to read from
         * @param b defines the blue component to read from
         * @returns the current Color3 object
         */
        set(r: number, g: number, b: number): Color3;
        /**
         * Compute the Color3 hexadecimal code as a string
         * @returns a string containing the hexadecimal representation of the Color3 object
         */
        toHexString(): string;
        /**
         * Computes a new Color3 converted from the current one to linear space
         * @returns a new Color3 object
         */
        toLinearSpace(): Color3;
        /**
         * Converts the Color3 values to linear space and stores the result in "convertedColor"
         * @param convertedColor defines the Color3 object where to store the linear space version
         * @returns the unmodified Color3
         */
        toLinearSpaceToRef(convertedColor: Color3): Color3;
        /**
         * Computes a new Color3 converted from the current one to gamma space
         * @returns a new Color3 object
         */
        toGammaSpace(): Color3;
        /**
         * Converts the Color3 values to gamma space and stores the result in "convertedColor"
         * @param convertedColor defines the Color3 object where to store the gamma space version
         * @returns the unmodified Color3
         */
        toGammaSpaceToRef(convertedColor: Color3): Color3;
        /**
         * Creates a new Color3 from the string containing valid hexadecimal values
         * @param hex defines a string containing valid hexadecimal values
         * @returns a new Color3 object
         */
        static FromHexString(hex: string): Color3;
        /**
         * Creates a new Vector3 from the starting index of the given array
         * @param array defines the source array
         * @param offset defines an offset in the source array
         * @returns a new Color3 object
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Color3;
        /**
         * Creates a new Color3 from integer values (< 256)
         * @param r defines the red component to read from (value between 0 and 255)
         * @param g defines the green component to read from (value between 0 and 255)
         * @param b defines the blue component to read from (value between 0 and 255)
         * @returns a new Color3 object
         */
        static FromInts(r: number, g: number, b: number): Color3;
        /**
         * Creates a new Color3 with values linearly interpolated of "amount" between the start Color3 and the end Color3
         * @param start defines the start Color3 value
         * @param end defines the end Color3 value
         * @param amount defines the gradient value between start and end
         * @returns a new Color3 object
         */
        static Lerp(start: Color3, end: Color3, amount: number): Color3;
        /**
         * Returns a Color3 value containing a red color
         * @returns a new Color3 object
         */
        static Red(): Color3;
        /**
         * Returns a Color3 value containing a green color
         * @returns a new Color3 object
         */
        static Green(): Color3;
        /**
         * Returns a Color3 value containing a blue color
         * @returns a new Color3 object
         */
        static Blue(): Color3;
        /**
         * Returns a Color3 value containing a black color
         * @returns a new Color3 object
         */
        static Black(): Color3;
        /**
         * Returns a Color3 value containing a white color
         * @returns a new Color3 object
         */
        static White(): Color3;
        /**
         * Returns a Color3 value containing a purple color
         * @returns a new Color3 object
         */
        static Purple(): Color3;
        /**
         * Returns a Color3 value containing a magenta color
         * @returns a new Color3 object
         */
        static Magenta(): Color3;
        /**
         * Returns a Color3 value containing a yellow color
         * @returns a new Color3 object
         */
        static Yellow(): Color3;
        /**
         * Returns a Color3 value containing a gray color
         * @returns a new Color3 object
         */
        static Gray(): Color3;
        /**
         * Returns a Color3 value containing a teal color
         * @returns a new Color3 object
         */
        static Teal(): Color3;
        /**
         * Returns a Color3 value containing a random color
         * @returns a new Color3 object
         */
        static Random(): Color3;
    }
    /**
     * Class used to hold a RBGA color
     */
    class Color4 {
        /**
         * Defines the red component (between 0 and 1, default is 0)
         */
        r: number;
        /**
         * Defines the green component (between 0 and 1, default is 0)
         */
        g: number;
        /**
         * Defines the blue component (between 0 and 1, default is 0)
         */
        b: number;
        /**
         * Defines the alpha component (between 0 and 1, default is 1)
         */
        a: number;
        /**
         * Creates a new Color4 object from red, green, blue values, all between 0 and 1
         * @param r defines the red component (between 0 and 1, default is 0)
         * @param g defines the green component (between 0 and 1, default is 0)
         * @param b defines the blue component (between 0 and 1, default is 0)
         * @param a defines the alpha component (between 0 and 1, default is 1)
         */
        constructor(
        /**
         * Defines the red component (between 0 and 1, default is 0)
         */
        r?: number, 
        /**
         * Defines the green component (between 0 and 1, default is 0)
         */
        g?: number, 
        /**
         * Defines the blue component (between 0 and 1, default is 0)
         */
        b?: number, 
        /**
         * Defines the alpha component (between 0 and 1, default is 1)
         */
        a?: number);
        /**
         * Adds in place the given Color4 values to the current Color4 object
         * @param right defines the second operand
         * @returns the current updated Color4 object
         */
        addInPlace(right: Color4): Color4;
        /**
         * Creates a new array populated with 4 numeric elements : red, green, blue, alpha values
         * @returns the new array
         */
        asArray(): number[];
        /**
         * Stores from the starting index in the given array the Color4 successive values
         * @param array defines the array where to store the r,g,b components
         * @param index defines an optional index in the target array to define where to start storing values
         * @returns the current Color4 object
         */
        toArray(array: number[], index?: number): Color4;
        /**
         * Creates a new Color4 set with the added values of the current Color4 and of the given one
         * @param right defines the second operand
         * @returns a new Color4 object
         */
        add(right: Color4): Color4;
        /**
         * Creates a new Color4 set with the subtracted values of the given one from the current Color4
         * @param right defines the second operand
         * @returns a new Color4 object
         */
        subtract(right: Color4): Color4;
        /**
         * Subtracts the given ones from the current Color4 values and stores the results in "result"
         * @param right defines the second operand
         * @param result defines the Color4 object where to store the result
         * @returns the current Color4 object
         */
        subtractToRef(right: Color4, result: Color4): Color4;
        /**
         * Creates a new Color4 with the current Color4 values multiplied by scale
         * @param scale defines the scaling factor to apply
         * @returns a new Color4 object
         */
        scale(scale: number): Color4;
        /**
         * Multiplies the current Color4 values by scale and stores the result in "result"
         * @param scale defines the scaling factor to apply
         * @param result defines the Color4 object where to store the result
         * @returns the current unmodified Color4
         */
        scaleToRef(scale: number, result: Color4): Color4;
        /**
         * Scale the current Color4 values by a factor and add the result to a given Color4
         * @param scale defines the scale factor
         * @param result defines the Color4 object where to store the result
         * @returns the unmodified current Color4
         */
        scaleAndAddToRef(scale: number, result: Color4): Color4;
        /**
         * Clamps the rgb values by the min and max values and stores the result into "result"
         * @param min defines minimum clamping value (default is 0)
         * @param max defines maximum clamping value (default is 1)
         * @param result defines color to store the result into.
         * @returns the cuurent Color4
         */
        clampToRef(min: number | undefined, max: number | undefined, result: Color4): Color4;
        /**
          * Multipy an Color4 value by another and return a new Color4 object
          * @param color defines the Color4 value to multiply by
          * @returns a new Color4 object
          */
        multiply(color: Color4): Color4;
        /**
         * Multipy a Color4 value by another and push the result in a reference value
         * @param color defines the Color4 value to multiply by
         * @param result defines the Color4 to fill the result in
         * @returns the result Color4
         */
        multiplyToRef(color: Color4, result: Color4): Color4;
        /**
         * Creates a string with the Color4 current values
         * @returns the string representation of the Color4 object
         */
        toString(): string;
        /**
         * Returns the string "Color4"
         * @returns "Color4"
         */
        getClassName(): string;
        /**
         * Compute the Color4 hash code
         * @returns an unique number that can be used to hash Color4 objects
         */
        getHashCode(): number;
        /**
         * Creates a new Color4 copied from the current one
         * @returns a new Color4 object
         */
        clone(): Color4;
        /**
         * Copies the given Color4 values into the current one
         * @param source defines the source Color4 object
         * @returns the current updated Color4 object
         */
        copyFrom(source: Color4): Color4;
        /**
         * Copies the given float values into the current one
         * @param r defines the red component to read from
         * @param g defines the green component to read from
         * @param b defines the blue component to read from
         * @param a defines the alpha component to read from
         * @returns the current updated Color4 object
         */
        copyFromFloats(r: number, g: number, b: number, a: number): Color4;
        /**
         * Copies the given float values into the current one
         * @param r defines the red component to read from
         * @param g defines the green component to read from
         * @param b defines the blue component to read from
         * @param a defines the alpha component to read from
         * @returns the current updated Color4 object
         */
        set(r: number, g: number, b: number, a: number): Color4;
        /**
         * Compute the Color4 hexadecimal code as a string
         * @returns a string containing the hexadecimal representation of the Color4 object
         */
        toHexString(): string;
        /**
         * Computes a new Color4 converted from the current one to linear space
         * @returns a new Color4 object
         */
        toLinearSpace(): Color4;
        /**
         * Converts the Color4 values to linear space and stores the result in "convertedColor"
         * @param convertedColor defines the Color4 object where to store the linear space version
         * @returns the unmodified Color4
         */
        toLinearSpaceToRef(convertedColor: Color4): Color4;
        /**
         * Computes a new Color4 converted from the current one to gamma space
         * @returns a new Color4 object
         */
        toGammaSpace(): Color4;
        /**
         * Converts the Color4 values to gamma space and stores the result in "convertedColor"
         * @param convertedColor defines the Color4 object where to store the gamma space version
         * @returns the unmodified Color4
         */
        toGammaSpaceToRef(convertedColor: Color4): Color4;
        /**
         * Creates a new Color4 from the string containing valid hexadecimal values
         * @param hex defines a string containing valid hexadecimal values
         * @returns a new Color4 object
         */
        static FromHexString(hex: string): Color4;
        /**
         * Creates a new Color4 object set with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object
         * @param left defines the start value
         * @param right defines the end value
         * @param amount defines the gradient factor
         * @returns a new Color4 object
         */
        static Lerp(left: Color4, right: Color4, amount: number): Color4;
        /**
         * Set the given "result" with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object
         * @param left defines the start value
         * @param right defines the end value
         * @param amount defines the gradient factor
         * @param result defines the Color4 object where to store data
         */
        static LerpToRef(left: Color4, right: Color4, amount: number, result: Color4): void;
        /**
         * Creates a new Color4 from the starting index element of the given array
         * @param array defines the source array to read from
         * @param offset defines the offset in the source array
         * @returns a new Color4 object
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Color4;
        /**
         * Creates a new Color3 from integer values (< 256)
         * @param r defines the red component to read from (value between 0 and 255)
         * @param g defines the green component to read from (value between 0 and 255)
         * @param b defines the blue component to read from (value between 0 and 255)
         * @param a defines the alpha component to read from (value between 0 and 255)
         * @returns a new Color3 object
         */
        static FromInts(r: number, g: number, b: number, a: number): Color4;
        /**
         * Check the content of a given array and convert it to an array containing RGBA data
         * If the original array was already containing count * 4 values then it is returned directly
         * @param colors defines the array to check
         * @param count defines the number of RGBA data to expect
         * @returns an array containing count * 4 values (RGBA)
         */
        static CheckColors4(colors: number[], count: number): number[];
    }
    /**
     * Class representing a vector containing 2 coordinates
     */
    class Vector2 {
        /** defines the first coordinate */
        x: number;
        /** defines the second coordinate */
        y: number;
        /**
         * Creates a new Vector2 from the given x and y coordinates
         * @param x defines the first coordinate
         * @param y defines the second coordinate
         */
        constructor(
        /** defines the first coordinate */
        x?: number, 
        /** defines the second coordinate */
        y?: number);
        /**
         * Gets a string with the Vector2 coordinates
         * @returns a string with the Vector2 coordinates
         */
        toString(): string;
        /**
         * Gets class name
         * @returns the string "Vector2"
         */
        getClassName(): string;
        /**
         * Gets current vector hash code
         * @returns the Vector2 hash code as a number
         */
        getHashCode(): number;
        /**
         * Sets the Vector2 coordinates in the given array or Float32Array from the given index.
         * @param array defines the source array
         * @param index defines the offset in source array
         * @returns the current Vector2
         */
        toArray(array: FloatArray, index?: number): Vector2;
        /**
         * Copy the current vector to an array
         * @returns a new array with 2 elements: the Vector2 coordinates.
         */
        asArray(): number[];
        /**
         * Sets the Vector2 coordinates with the given Vector2 coordinates
         * @param source defines the source Vector2
         * @returns the current updated Vector2
         */
        copyFrom(source: Vector2): Vector2;
        /**
         * Sets the Vector2 coordinates with the given floats
         * @param x defines the first coordinate
         * @param y defines the second coordinate
         * @returns the current updated Vector2
         */
        copyFromFloats(x: number, y: number): Vector2;
        /**
         * Sets the Vector2 coordinates with the given floats
         * @param x defines the first coordinate
         * @param y defines the second coordinate
         * @returns the current updated Vector2
         */
        set(x: number, y: number): Vector2;
        /**
         * Add another vector with the current one
         * @param otherVector defines the other vector
         * @returns a new Vector2 set with the addition of the current Vector2 and the given one coordinates
         */
        add(otherVector: Vector2): Vector2;
        /**
         * Sets the "result" coordinates with the addition of the current Vector2 and the given one coordinates
         * @param otherVector defines the other vector
         * @param result defines the target vector
         * @returns the unmodified current Vector2
         */
        addToRef(otherVector: Vector2, result: Vector2): Vector2;
        /**
         * Set the Vector2 coordinates by adding the given Vector2 coordinates
         * @param otherVector defines the other vector
         * @returns the current updated Vector2
         */
        addInPlace(otherVector: Vector2): Vector2;
        /**
         * Gets a new Vector2 by adding the current Vector2 coordinates to the given Vector3 x, y coordinates
         * @param otherVector defines the other vector
         * @returns a new Vector2
         */
        addVector3(otherVector: Vector3): Vector2;
        /**
         * Gets a new Vector2 set with the subtracted coordinates of the given one from the current Vector2
         * @param otherVector defines the other vector
         * @returns a new Vector2
         */
        subtract(otherVector: Vector2): Vector2;
        /**
         * Sets the "result" coordinates with the subtraction of the given one from the current Vector2 coordinates.
         * @param otherVector defines the other vector
         * @param result defines the target vector
         * @returns the unmodified current Vector2
         */
        subtractToRef(otherVector: Vector2, result: Vector2): Vector2;
        /**
         * Sets the current Vector2 coordinates by subtracting from it the given one coordinates
         * @param otherVector defines the other vector
         * @returns the current updated Vector2
         */
        subtractInPlace(otherVector: Vector2): Vector2;
        /**
         * Multiplies in place the current Vector2 coordinates by the given ones
         * @param otherVector defines the other vector
         * @returns the current updated Vector2
         */
        multiplyInPlace(otherVector: Vector2): Vector2;
        /**
         * Returns a new Vector2 set with the multiplication of the current Vector2 and the given one coordinates
         * @param otherVector defines the other vector
         * @returns a new Vector2
         */
        multiply(otherVector: Vector2): Vector2;
        /**
         * Sets "result" coordinates with the multiplication of the current Vector2 and the given one coordinates
         * @param otherVector defines the other vector
         * @param result defines the target vector
         * @returns the unmodified current Vector2
         */
        multiplyToRef(otherVector: Vector2, result: Vector2): Vector2;
        /**
         * Gets a new Vector2 set with the Vector2 coordinates multiplied by the given floats
         * @param x defines the first coordinate
         * @param y defines the second coordinate
         * @returns a new Vector2
         */
        multiplyByFloats(x: number, y: number): Vector2;
        /**
         * Returns a new Vector2 set with the Vector2 coordinates divided by the given one coordinates
         * @param otherVector defines the other vector
         * @returns a new Vector2
         */
        divide(otherVector: Vector2): Vector2;
        /**
         * Sets the "result" coordinates with the Vector2 divided by the given one coordinates
         * @param otherVector defines the other vector
         * @param result defines the target vector
         * @returns the unmodified current Vector2
         */
        divideToRef(otherVector: Vector2, result: Vector2): Vector2;
        /**
         * Divides the current Vector2 coordinates by the given ones
         * @param otherVector defines the other vector
         * @returns the current updated Vector2
         */
        divideInPlace(otherVector: Vector2): Vector2;
        /**
         * Gets a new Vector2 with current Vector2 negated coordinates
         * @returns a new Vector2
         */
        negate(): Vector2;
        /**
         * Multiply the Vector2 coordinates by scale
         * @param scale defines the scaling factor
         * @returns the current updated Vector2
         */
        scaleInPlace(scale: number): Vector2;
        /**
         * Returns a new Vector2 scaled by "scale" from the current Vector2
         * @param scale defines the scaling factor
         * @returns a new Vector2
         */
        scale(scale: number): Vector2;
        /**
         * Scale the current Vector2 values by a factor to a given Vector2
         * @param scale defines the scale factor
         * @param result defines the Vector2 object where to store the result
         * @returns the unmodified current Vector2
         */
        scaleToRef(scale: number, result: Vector2): Vector2;
        /**
         * Scale the current Vector2 values by a factor and add the result to a given Vector2
         * @param scale defines the scale factor
         * @param result defines the Vector2 object where to store the result
         * @returns the unmodified current Vector2
         */
        scaleAndAddToRef(scale: number, result: Vector2): Vector2;
        /**
         * Gets a boolean if two vectors are equals
         * @param otherVector defines the other vector
         * @returns true if the given vector coordinates strictly equal the current Vector2 ones
         */
        equals(otherVector: Vector2): boolean;
        /**
         * Gets a boolean if two vectors are equals (using an epsilon value)
         * @param otherVector defines the other vector
         * @param epsilon defines the minimal distance to consider equality
         * @returns true if the given vector coordinates are close to the current ones by a distance of epsilon.
         */
        equalsWithEpsilon(otherVector: Vector2, epsilon?: number): boolean;
        /**
         * Gets a new Vector2 from current Vector2 floored values
         * @returns a new Vector2
         */
        floor(): Vector2;
        /**
         * Gets a new Vector2 from current Vector2 floored values
         * @returns a new Vector2
         */
        fract(): Vector2;
        /**
         * Gets the length of the vector
         * @returns the vector length (float)
         */
        length(): number;
        /**
         * Gets the vector squared length
         * @returns the vector squared length (float)
         */
        lengthSquared(): number;
        /**
         * Normalize the vector
         * @returns the current updated Vector2
         */
        normalize(): Vector2;
        /**
         * Gets a new Vector2 copied from the Vector2
         * @returns a new Vector2
         */
        clone(): Vector2;
        /**
         * Gets a new Vector2(0, 0)
         * @returns a new Vector2
         */
        static Zero(): Vector2;
        /**
         * Gets a new Vector2(1, 1)
         * @returns a new Vector2
         */
        static One(): Vector2;
        /**
         * Gets a new Vector2 set from the given index element of the given array
         * @param array defines the data source
         * @param offset defines the offset in the data source
         * @returns a new Vector2
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Vector2;
        /**
         * Sets "result" from the given index element of the given array
         * @param array defines the data source
         * @param offset defines the offset in the data source
         * @param result defines the target vector
         */
        static FromArrayToRef(array: ArrayLike<number>, offset: number, result: Vector2): void;
        /**
         * Gets a new Vector2 located for "amount" (float) on the CatmullRom spline defined by the given four Vector2
         * @param value1 defines 1st point of control
         * @param value2 defines 2nd point of control
         * @param value3 defines 3rd point of control
         * @param value4 defines 4th point of control
         * @param amount defines the interpolation factor
         * @returns a new Vector2
         */
        static CatmullRom(value1: Vector2, value2: Vector2, value3: Vector2, value4: Vector2, amount: number): Vector2;
        /**
         * Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
         * If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
         * If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate
         * @param value defines the value to clamp
         * @param min defines the lower limit
         * @param max defines the upper limit
         * @returns a new Vector2
         */
        static Clamp(value: Vector2, min: Vector2, max: Vector2): Vector2;
        /**
         * Returns a new Vector2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value3", "tangent1", "tangent2"
         * @param value1 defines the 1st control point
         * @param tangent1 defines the outgoing tangent
         * @param value2 defines the 2nd control point
         * @param tangent2 defines the incoming tangent
         * @param amount defines the interpolation factor
         * @returns a new Vector2
         */
        static Hermite(value1: Vector2, tangent1: Vector2, value2: Vector2, tangent2: Vector2, amount: number): Vector2;
        /**
         * Returns a new Vector2 located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end".
         * @param start defines the start vector
         * @param end defines the end vector
         * @param amount defines the interpolation factor
         * @returns a new Vector2
         */
        static Lerp(start: Vector2, end: Vector2, amount: number): Vector2;
        /**
         * Gets the dot product of the vector "left" and the vector "right"
         * @param left defines first vector
         * @param right defines second vector
         * @returns the dot product (float)
         */
        static Dot(left: Vector2, right: Vector2): number;
        /**
         * Returns a new Vector2 equal to the normalized given vector
         * @param vector defines the vector to normalize
         * @returns a new Vector2
         */
        static Normalize(vector: Vector2): Vector2;
        /**
         * Gets a new Vector2 set with the minimal coordinate values from the "left" and "right" vectors
         * @param left defines 1st vector
         * @param right defines 2nd vector
         * @returns a new Vector2
         */
        static Minimize(left: Vector2, right: Vector2): Vector2;
        /**
         * Gets a new Vecto2 set with the maximal coordinate values from the "left" and "right" vectors
         * @param left defines 1st vector
         * @param right defines 2nd vector
         * @returns a new Vector2
         */
        static Maximize(left: Vector2, right: Vector2): Vector2;
        /**
         * Gets a new Vector2 set with the transformed coordinates of the given vector by the given transformation matrix
         * @param vector defines the vector to transform
         * @param transformation defines the matrix to apply
         * @returns a new Vector2
         */
        static Transform(vector: Vector2, transformation: Matrix): Vector2;
        /**
         * Transforms the given vector coordinates by the given transformation matrix and stores the result in the vector "result" coordinates
         * @param vector defines the vector to transform
         * @param transformation defines the matrix to apply
         * @param result defines the target vector
         */
        static TransformToRef(vector: Vector2, transformation: Matrix, result: Vector2): void;
        /**
         * Determines if a given vector is included in a triangle
         * @param p defines the vector to test
         * @param p0 defines 1st triangle point
         * @param p1 defines 2nd triangle point
         * @param p2 defines 3rd triangle point
         * @returns true if the point "p" is in the triangle defined by the vertors "p0", "p1", "p2"
         */
        static PointInTriangle(p: Vector2, p0: Vector2, p1: Vector2, p2: Vector2): boolean;
        /**
         * Gets the distance between the vectors "value1" and "value2"
         * @param value1 defines first vector
         * @param value2 defines second vector
         * @returns the distance between vectors
         */
        static Distance(value1: Vector2, value2: Vector2): number;
        /**
         * Returns the squared distance between the vectors "value1" and "value2"
         * @param value1 defines first vector
         * @param value2 defines second vector
         * @returns the squared distance between vectors
         */
        static DistanceSquared(value1: Vector2, value2: Vector2): number;
        /**
         * Gets a new Vector2 located at the center of the vectors "value1" and "value2"
         * @param value1 defines first vector
         * @param value2 defines second vector
         * @returns a new Vector2
         */
        static Center(value1: Vector2, value2: Vector2): Vector2;
        /**
         * Gets the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB".
         * @param p defines the middle point
         * @param segA defines one point of the segment
         * @param segB defines the other point of the segment
         * @returns the shortest distance
         */
        static DistanceOfPointFromSegment(p: Vector2, segA: Vector2, segB: Vector2): number;
    }
    /**
     * Classed used to store (x,y,z) vector representation
     * A Vector3 is the main object used in 3D geometry
     * It can represent etiher the coordinates of a point the space, either a direction
     * Reminder: Babylon.js uses a left handed forward facing system
     */
    class Vector3 {
        /**
         * Defines the first coordinates (on X axis)
         */
        x: number;
        /**
         * Defines the second coordinates (on Y axis)
         */
        y: number;
        /**
         * Defines the third coordinates (on Z axis)
         */
        z: number;
        /**
         * Creates a new Vector3 object from the given x, y, z (floats) coordinates.
         * @param x defines the first coordinates (on X axis)
         * @param y defines the second coordinates (on Y axis)
         * @param z defines the third coordinates (on Z axis)
         */
        constructor(
        /**
         * Defines the first coordinates (on X axis)
         */
        x?: number, 
        /**
         * Defines the second coordinates (on Y axis)
         */
        y?: number, 
        /**
         * Defines the third coordinates (on Z axis)
         */
        z?: number);
        /**
         * Creates a string representation of the Vector3
         * @returns a string with the Vector3 coordinates.
         */
        toString(): string;
        /**
         * Gets the class name
         * @returns the string "Vector3"
         */
        getClassName(): string;
        /**
         * Creates the Vector3 hash code
         * @returns a number which tends to be unique between Vector3 instances
         */
        getHashCode(): number;
        /**
         * Creates an array containing three elements : the coordinates of the Vector3
         * @returns a new array of numbers
         */
        asArray(): number[];
        /**
         * Populates the given array or Float32Array from the given index with the successive coordinates of the Vector3
         * @param array defines the destination array
         * @param index defines the offset in the destination array
         * @returns the current Vector3
         */
        toArray(array: FloatArray, index?: number): Vector3;
        /**
         * Converts the current Vector3 into a quaternion (considering that the Vector3 contains Euler angles representation of a rotation)
         * @returns a new Quaternion object, computed from the Vector3 coordinates
         */
        toQuaternion(): Quaternion;
        /**
         * Adds the given vector to the current Vector3
         * @param otherVector defines the second operand
         * @returns the current updated Vector3
         */
        addInPlace(otherVector: Vector3): Vector3;
        /**
         * Gets a new Vector3, result of the addition the current Vector3 and the given vector
         * @param otherVector defines the second operand
         * @returns the resulting Vector3
         */
        add(otherVector: Vector3): Vector3;
        /**
         * Adds the current Vector3 to the given one and stores the result in the vector "result"
         * @param otherVector defines the second operand
         * @param result defines the Vector3 object where to store the result
         * @returns the current Vector3
         */
        addToRef(otherVector: Vector3, result: Vector3): Vector3;
        /**
         * Subtract the given vector from the current Vector3
         * @param otherVector defines the second operand
         * @returns the current updated Vector3
         */
        subtractInPlace(otherVector: Vector3): Vector3;
        /**
         * Returns a new Vector3, result of the subtraction of the given vector from the current Vector3
         * @param otherVector defines the second operand
         * @returns the resulting Vector3
         */
        subtract(otherVector: Vector3): Vector3;
        /**
         * Subtracts the given vector from the current Vector3 and stores the result in the vector "result".
         * @param otherVector defines the second operand
         * @param result defines the Vector3 object where to store the result
         * @returns the current Vector3
         */
        subtractToRef(otherVector: Vector3, result: Vector3): Vector3;
        /**
         * Returns a new Vector3 set with the subtraction of the given floats from the current Vector3 coordinates
         * @param x defines the x coordinate of the operand
         * @param y defines the y coordinate of the operand
         * @param z defines the z coordinate of the operand
         * @returns the resulting Vector3
         */
        subtractFromFloats(x: number, y: number, z: number): Vector3;
        /**
         * Subtracts the given floats from the current Vector3 coordinates and set the given vector "result" with this result
         * @param x defines the x coordinate of the operand
         * @param y defines the y coordinate of the operand
         * @param z defines the z coordinate of the operand
         * @param result defines the Vector3 object where to store the result
         * @returns the current Vector3
         */
        subtractFromFloatsToRef(x: number, y: number, z: number, result: Vector3): Vector3;
        /**
         * Gets a new Vector3 set with the current Vector3 negated coordinates
         * @returns a new Vector3
         */
        negate(): Vector3;
        /**
         * Multiplies the Vector3 coordinates by the float "scale"
         * @param scale defines the multiplier factor
         * @returns the current updated Vector3
         */
        scaleInPlace(scale: number): Vector3;
        /**
         * Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale"
         * @param scale defines the multiplier factor
         * @returns a new Vector3
         */
        scale(scale: number): Vector3;
        /**
         * Multiplies the current Vector3 coordinates by the float "scale" and stores the result in the given vector "result" coordinates
         * @param scale defines the multiplier factor
         * @param result defines the Vector3 object where to store the result
         * @returns the current Vector3
         */
        scaleToRef(scale: number, result: Vector3): Vector3;
        /**
         * Scale the current Vector3 values by a factor and add the result to a given Vector3
         * @param scale defines the scale factor
         * @param result defines the Vector3 object where to store the result
         * @returns the unmodified current Vector3
         */
        scaleAndAddToRef(scale: number, result: Vector3): Vector3;
        /**
         * Returns true if the current Vector3 and the given vector coordinates are strictly equal
         * @param otherVector defines the second operand
         * @returns true if both vectors are equals
         */
        equals(otherVector: Vector3): boolean;
        /**
         * Returns true if the current Vector3 and the given vector coordinates are distant less than epsilon
         * @param otherVector defines the second operand
         * @param epsilon defines the minimal distance to define values as equals
         * @returns true if both vectors are distant less than epsilon
         */
        equalsWithEpsilon(otherVector: Vector3, epsilon?: number): boolean;
        /**
         * Returns true if the current Vector3 coordinates equals the given floats
         * @param x defines the x coordinate of the operand
         * @param y defines the y coordinate of the operand
         * @param z defines the z coordinate of the operand
         * @returns true if both vectors are equals
         */
        equalsToFloats(x: number, y: number, z: number): boolean;
        /**
         * Multiplies the current Vector3 coordinates by the given ones
         * @param otherVector defines the second operand
         * @returns the current updated Vector3
         */
        multiplyInPlace(otherVector: Vector3): Vector3;
        /**
         * Returns a new Vector3, result of the multiplication of the current Vector3 by the given vector
         * @param otherVector defines the second operand
         * @returns the new Vector3
         */
        multiply(otherVector: Vector3): Vector3;
        /**
         * Multiplies the current Vector3 by the given one and stores the result in the given vector "result"
         * @param otherVector defines the second operand
         * @param result defines the Vector3 object where to store the result
         * @returns the current Vector3
         */
        multiplyToRef(otherVector: Vector3, result: Vector3): Vector3;
        /**
         * Returns a new Vector3 set with the result of the mulliplication of the current Vector3 coordinates by the given floats
         * @param x defines the x coordinate of the operand
         * @param y defines the y coordinate of the operand
         * @param z defines the z coordinate of the operand
         * @returns the new Vector3
         */
        multiplyByFloats(x: number, y: number, z: number): Vector3;
        /**
         * Returns a new Vector3 set with the result of the division of the current Vector3 coordinates by the given ones
         * @param otherVector defines the second operand
         * @returns the new Vector3
         */
        divide(otherVector: Vector3): Vector3;
        /**
         * Divides the current Vector3 coordinates by the given ones and stores the result in the given vector "result"
         * @param otherVector defines the second operand
         * @param result defines the Vector3 object where to store the result
         * @returns the current Vector3
         */
        divideToRef(otherVector: Vector3, result: Vector3): Vector3;
        /**
         * Divides the current Vector3 coordinates by the given ones.
         * @param otherVector defines the second operand
         * @returns the current updated Vector3
         */
        divideInPlace(otherVector: Vector3): Vector3;
        /**
         * Updates the current Vector3 with the minimal coordinate values between its and the given vector ones
         * @param other defines the second operand
         * @returns the current updated Vector3
         */
        minimizeInPlace(other: Vector3): Vector3;
        /**
         * Updates the current Vector3 with the maximal coordinate values between its and the given vector ones.
         * @param other defines the second operand
         * @returns the current updated Vector3
         */
        maximizeInPlace(other: Vector3): Vector3;
        /**
         * Gets a boolean indicating that the vector is non uniform meaning x, y or z are not all the same
         */
        readonly isNonUniform: boolean;
        /**
         * Gets a new Vector3 from current Vector3 floored values
         * @returns a new Vector3
         */
        floor(): Vector3;
        /**
         * Gets a new Vector3 from current Vector3 floored values
         * @returns a new Vector3
         */
        fract(): Vector3;
        /**
         * Gets the length of the Vector3
         * @returns the length of the Vecto3
         */
        length(): number;
        /**
         * Gets the squared length of the Vector3
         * @returns squared length of the Vector3
         */
        lengthSquared(): number;
        /**
         * Normalize the current Vector3.
         * Please note that this is an in place operation.
         * @returns the current updated Vector3
         */
        normalize(): Vector3;
        /**
         * Normalize the current Vector3 to a new vector
         * @returns the new Vector3
         */
        normalizeToNew(): Vector3;
        /**
         * Normalize the current Vector3 to the reference
         * @param reference define the Vector3 to update
         * @returns the updated Vector3
         */
        normalizeToRef(reference: Vector3): Vector3;
        /**
         * Creates a new Vector3 copied from the current Vector3
         * @returns the new Vector3
         */
        clone(): Vector3;
        /**
         * Copies the given vector coordinates to the current Vector3 ones
         * @param source defines the source Vector3
         * @returns the current updated Vector3
         */
        copyFrom(source: Vector3): Vector3;
        /**
         * Copies the given floats to the current Vector3 coordinates
         * @param x defines the x coordinate of the operand
         * @param y defines the y coordinate of the operand
         * @param z defines the z coordinate of the operand
         * @returns the current updated Vector3
         */
        copyFromFloats(x: number, y: number, z: number): Vector3;
        /**
         * Copies the given floats to the current Vector3 coordinates
         * @param x defines the x coordinate of the operand
         * @param y defines the y coordinate of the operand
         * @param z defines the z coordinate of the operand
         * @returns the current updated Vector3
         */
        set(x: number, y: number, z: number): Vector3;
        /**
         * Get the clip factor between two vectors
         * @param vector0 defines the first operand
         * @param vector1 defines the second operand
         * @param axis defines the axis to use
         * @param size defines the size along the axis
         * @returns the clip factor
         */
        static GetClipFactor(vector0: Vector3, vector1: Vector3, axis: Vector3, size: number): number;
        /**
         * Get angle between two vectors
         * @param vector0 angle between vector0 and vector1
         * @param vector1 angle between vector0 and vector1
         * @param normal direction of the normal
         * @return the angle between vector0 and vector1
         */
        static GetAngleBetweenVectors(vector0: Vector3, vector1: Vector3, normal: Vector3): number;
        /**
         * Returns a new Vector3 set from the index "offset" of the given array
         * @param array defines the source array
         * @param offset defines the offset in the source array
         * @returns the new Vector3
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Vector3;
        /**
         * Returns a new Vector3 set from the index "offset" of the given Float32Array
         * This function is deprecated.  Use FromArray instead
         * @param array defines the source array
         * @param offset defines the offset in the source array
         * @returns the new Vector3
         */
        static FromFloatArray(array: Float32Array, offset?: number): Vector3;
        /**
         * Sets the given vector "result" with the element values from the index "offset" of the given array
         * @param array defines the source array
         * @param offset defines the offset in the source array
         * @param result defines the Vector3 where to store the result
         */
        static FromArrayToRef(array: ArrayLike<number>, offset: number, result: Vector3): void;
        /**
         * Sets the given vector "result" with the element values from the index "offset" of the given Float32Array
         * This function is deprecated.  Use FromArrayToRef instead.
         * @param array defines the source array
         * @param offset defines the offset in the source array
         * @param result defines the Vector3 where to store the result
         */
        static FromFloatArrayToRef(array: Float32Array, offset: number, result: Vector3): void;
        /**
         * Sets the given vector "result" with the given floats.
         * @param x defines the x coordinate of the source
         * @param y defines the y coordinate of the source
         * @param z defines the z coordinate of the source
         * @param result defines the Vector3 where to store the result
         */
        static FromFloatsToRef(x: number, y: number, z: number, result: Vector3): void;
        /**
         * Returns a new Vector3 set to (0.0, 0.0, 0.0)
         * @returns a new empty Vector3
         */
        static Zero(): Vector3;
        /**
         * Returns a new Vector3 set to (1.0, 1.0, 1.0)
         * @returns a new unit Vector3
         */
        static One(): Vector3;
        /**
         * Returns a new Vector3 set to (0.0, 1.0, 0.0)
         * @returns a new up Vector3
         */
        static Up(): Vector3;
        /**
         * Returns a new Vector3 set to (0.0, -1.0, 0.0)
         * @returns a new down Vector3
         */
        static Down(): Vector3;
        /**
         * Returns a new Vector3 set to (0.0, 0.0, 1.0)
         * @returns a new forward Vector3
         */
        static Forward(): Vector3;
        /**
         * Returns a new Vector3 set to (1.0, 0.0, 0.0)
         * @returns a new right Vector3
         */
        static Right(): Vector3;
        /**
         * Returns a new Vector3 set to (-1.0, 0.0, 0.0)
         * @returns a new left Vector3
         */
        static Left(): Vector3;
        /**
         * Returns a new Vector3 set with the result of the transformation by the given matrix of the given vector.
         * This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
         * @param vector defines the Vector3 to transform
         * @param transformation defines the transformation matrix
         * @returns the transformed Vector3
         */
        static TransformCoordinates(vector: Vector3, transformation: Matrix): Vector3;
        /**
         * Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector
         * This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
         * @param vector defines the Vector3 to transform
         * @param transformation defines the transformation matrix
         * @param result defines the Vector3 where to store the result
         */
        static TransformCoordinatesToRef(vector: Vector3, transformation: Matrix, result: Vector3): void;
        /**
         * Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z)
         * This method computes tranformed coordinates only, not transformed direction vectors
         * @param x define the x coordinate of the source vector
         * @param y define the y coordinate of the source vector
         * @param z define the z coordinate of the source vector
         * @param transformation defines the transformation matrix
         * @param result defines the Vector3 where to store the result
         */
        static TransformCoordinatesFromFloatsToRef(x: number, y: number, z: number, transformation: Matrix, result: Vector3): void;
        /**
         * Returns a new Vector3 set with the result of the normal transformation by the given matrix of the given vector
         * This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
         * @param vector defines the Vector3 to transform
         * @param transformation defines the transformation matrix
         * @returns the new Vector3
         */
        static TransformNormal(vector: Vector3, transformation: Matrix): Vector3;
        /**
         * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector
         * This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
         * @param vector defines the Vector3 to transform
         * @param transformation defines the transformation matrix
         * @param result defines the Vector3 where to store the result
         */
        static TransformNormalToRef(vector: Vector3, transformation: Matrix, result: Vector3): void;
        /**
         * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z)
         * This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
         * @param x define the x coordinate of the source vector
         * @param y define the y coordinate of the source vector
         * @param z define the z coordinate of the source vector
         * @param transformation defines the transformation matrix
         * @param result defines the Vector3 where to store the result
         */
        static TransformNormalFromFloatsToRef(x: number, y: number, z: number, transformation: Matrix, result: Vector3): void;
        /**
         * Returns a new Vector3 located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4"
         * @param value1 defines the first control point
         * @param value2 defines the second control point
         * @param value3 defines the third control point
         * @param value4 defines the fourth control point
         * @param amount defines the amount on the spline to use
         * @returns the new Vector3
         */
        static CatmullRom(value1: Vector3, value2: Vector3, value3: Vector3, value4: Vector3, amount: number): Vector3;
        /**
         * Returns a new Vector3 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
         * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
         * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
         * @param value defines the current value
         * @param min defines the lower range value
         * @param max defines the upper range value
         * @returns the new Vector3
         */
        static Clamp(value: Vector3, min: Vector3, max: Vector3): Vector3;
        /**
         * Returns a new Vector3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2"
         * @param value1 defines the first control point
         * @param tangent1 defines the first tangent vector
         * @param value2 defines the second control point
         * @param tangent2 defines the second tangent vector
         * @param amount defines the amount on the interpolation spline (between 0 and 1)
         * @returns the new Vector3
         */
        static Hermite(value1: Vector3, tangent1: Vector3, value2: Vector3, tangent2: Vector3, amount: number): Vector3;
        /**
         * Returns a new Vector3 located for "amount" (float) on the linear interpolation between the vectors "start" and "end"
         * @param start defines the start value
         * @param end defines the end value
         * @param amount max defines amount between both (between 0 and 1)
         * @returns the new Vector3
         */
        static Lerp(start: Vector3, end: Vector3, amount: number): Vector3;
        /**
         * Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end"
         * @param start defines the start value
         * @param end defines the end value
         * @param amount max defines amount between both (between 0 and 1)
         * @param result defines the Vector3 where to store the result
         */
        static LerpToRef(start: Vector3, end: Vector3, amount: number, result: Vector3): void;
        /**
         * Returns the dot product (float) between the vectors "left" and "right"
         * @param left defines the left operand
         * @param right defines the right operand
         * @returns the dot product
         */
        static Dot(left: Vector3, right: Vector3): number;
        /**
         * Returns a new Vector3 as the cross product of the vectors "left" and "right"
         * The cross product is then orthogonal to both "left" and "right"
         * @param left defines the left operand
         * @param right defines the right operand
         * @returns the cross product
         */
        static Cross(left: Vector3, right: Vector3): Vector3;
        /**
         * Sets the given vector "result" with the cross product of "left" and "right"
         * The cross product is then orthogonal to both "left" and "right"
         * @param left defines the left operand
         * @param right defines the right operand
         * @param result defines the Vector3 where to store the result
         */
        static CrossToRef(left: Vector3, right: Vector3, result: Vector3): void;
        /**
         * Returns a new Vector3 as the normalization of the given vector
         * @param vector defines the Vector3 to normalize
         * @returns the new Vector3
         */
        static Normalize(vector: Vector3): Vector3;
        /**
         * Sets the given vector "result" with the normalization of the given first vector
         * @param vector defines the Vector3 to normalize
         * @param result defines the Vector3 where to store the result
         */
        static NormalizeToRef(vector: Vector3, result: Vector3): void;
        private static _viewportMatrixCache;
        /**
         * Project a Vector3 onto screen space
         * @param vector defines the Vector3 to project
         * @param world defines the world matrix to use
         * @param transform defines the transform (view x projection) matrix to use
         * @param viewport defines the screen viewport to use
         * @returns the new Vector3
         */
        static Project(vector: Vector3, world: Matrix, transform: Matrix, viewport: rect): Vector3;
        /**
         * Unproject from screen space to object space
         * @param source defines the screen space Vector3 to use
         * @param viewportWidth defines the current width of the viewport
         * @param viewportHeight defines the current height of the viewport
         * @param world defines the world matrix to use (can be set to Identity to go to world space)
         * @param transform defines the transform (view x projection) matrix to use
         * @returns the new Vector3
         */
        static UnprojectFromTransform(source: Vector3, viewportWidth: number, viewportHeight: number, world: Matrix, transform: Matrix): Vector3;
        /**
         * Unproject from screen space to object space
         * @param source defines the screen space Vector3 to use
         * @param viewportWidth defines the current width of the viewport
         * @param viewportHeight defines the current height of the viewport
         * @param world defines the world matrix to use (can be set to Identity to go to world space)
         * @param view defines the view matrix to use
         * @param projection defines the projection matrix to use
         * @returns the new Vector3
         */
        static Unproject(source: Vector3, viewportWidth: number, viewportHeight: number, world: Matrix, view: Matrix, projection: Matrix): Vector3;
        /**
         * Unproject from screen space to object space
         * @param source defines the screen space Vector3 to use
         * @param viewportWidth defines the current width of the viewport
         * @param viewportHeight defines the current height of the viewport
         * @param world defines the world matrix to use (can be set to Identity to go to world space)
         * @param view defines the view matrix to use
         * @param projection defines the projection matrix to use
         * @param result defines the Vector3 where to store the result
         */
        static UnprojectToRef(source: Vector3, viewportWidth: number, viewportHeight: number, world: Matrix, view: Matrix, projection: Matrix, result: Vector3): void;
        /**
         * Unproject from screen space to object space
         * @param sourceX defines the screen space x coordinate to use
         * @param sourceY defines the screen space y coordinate to use
         * @param sourceZ defines the screen space z coordinate to use
         * @param viewportWidth defines the current width of the viewport
         * @param viewportHeight defines the current height of the viewport
         * @param world defines the world matrix to use (can be set to Identity to go to world space)
         * @param view defines the view matrix to use
         * @param projection defines the projection matrix to use
         * @param result defines the Vector3 where to store the result
         */
        static UnprojectFloatsToRef(sourceX: float, sourceY: float, sourceZ: float, viewportWidth: number, viewportHeight: number, world: Matrix, view: Matrix, projection: Matrix, result: Vector3): void;
        /**
         * Gets the minimal coordinate values between two Vector3
         * @param left defines the first operand
         * @param right defines the second operand
         * @returns the new Vector3
         */
        static Minimize(left: Vector3, right: Vector3): Vector3;
        /**
         * Gets the maximal coordinate values between two Vector3
         * @param left defines the first operand
         * @param right defines the second operand
         * @returns the new Vector3
         */
        static Maximize(left: Vector3, right: Vector3): Vector3;
        /**
         * Returns the distance between the vectors "value1" and "value2"
         * @param value1 defines the first operand
         * @param value2 defines the second operand
         * @returns the distance
         */
        static Distance(value1: Vector3, value2: Vector3): number;
        /**
         * Returns the squared distance between the vectors "value1" and "value2"
         * @param value1 defines the first operand
         * @param value2 defines the second operand
         * @returns the squared distance
         */
        static DistanceSquared(value1: Vector3, value2: Vector3): number;
        /**
         * Returns a new Vector3 located at the center between "value1" and "value2"
         * @param value1 defines the first operand
         * @param value2 defines the second operand
         * @returns the new Vector3
         */
        static Center(value1: Vector3, value2: Vector3): Vector3;
        /**
         * Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system),
         * RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply
         * to something in order to rotate it from its local system to the given target system
         * Note: axis1, axis2 and axis3 are normalized during this operation
         * @param axis1 defines the first axis
         * @param axis2 defines the second axis
         * @param axis3 defines the third axis
         * @returns a new Vector3
         */
        static RotationFromAxis(axis1: Vector3, axis2: Vector3, axis3: Vector3): Vector3;
        /**
         * The same than RotationFromAxis but updates the given ref Vector3 parameter instead of returning a new Vector3
         * @param axis1 defines the first axis
         * @param axis2 defines the second axis
         * @param axis3 defines the third axis
         * @param ref defines the Vector3 where to store the result
         */
        static RotationFromAxisToRef(axis1: Vector3, axis2: Vector3, axis3: Vector3, ref: Vector3): void;
    }
    class Vector4 {
        x: number;
        y: number;
        z: number;
        w: number;
        /**
         * Creates a Vector4 object from the given floats.
         */
        constructor(x: number, y: number, z: number, w: number);
        /**
         * Returns the string with the Vector4 coordinates.
         */
        toString(): string;
        /**
         * Returns the string "Vector4".
         */
        getClassName(): string;
        /**
         * Returns the Vector4 hash code.
         */
        getHashCode(): number;
        /**
         * Returns a new array populated with 4 elements : the Vector4 coordinates.
         */
        asArray(): number[];
        /**
         * Populates the given array from the given index with the Vector4 coordinates.
         * Returns the Vector4.
         */
        toArray(array: FloatArray, index?: number): Vector4;
        /**
         * Adds the given vector to the current Vector4.
         * Returns the updated Vector4.
         */
        addInPlace(otherVector: Vector4): Vector4;
        /**
         * Returns a new Vector4 as the result of the addition of the current Vector4 and the given one.
         */
        add(otherVector: Vector4): Vector4;
        /**
         * Updates the given vector "result" with the result of the addition of the current Vector4 and the given one.
         * Returns the current Vector4.
         */
        addToRef(otherVector: Vector4, result: Vector4): Vector4;
        /**
         * Subtract in place the given vector from the current Vector4.
         * Returns the updated Vector4.
         */
        subtractInPlace(otherVector: Vector4): Vector4;
        /**
         * Returns a new Vector4 with the result of the subtraction of the given vector from the current Vector4.
         */
        subtract(otherVector: Vector4): Vector4;
        /**
         * Sets the given vector "result" with the result of the subtraction of the given vector from the current Vector4.
         * Returns the current Vector4.
         */
        subtractToRef(otherVector: Vector4, result: Vector4): Vector4;
        /**
         * Returns a new Vector4 set with the result of the subtraction of the given floats from the current Vector4 coordinates.
         */
        subtractFromFloats(x: number, y: number, z: number, w: number): Vector4;
        /**
         * Sets the given vector "result" set with the result of the subtraction of the given floats from the current Vector4 coordinates.
         * Returns the current Vector4.
         */
        subtractFromFloatsToRef(x: number, y: number, z: number, w: number, result: Vector4): Vector4;
        /**
         * Returns a new Vector4 set with the current Vector4 negated coordinates.
         */
        negate(): Vector4;
        /**
         * Multiplies the current Vector4 coordinates by scale (float).
         * Returns the updated Vector4.
         */
        scaleInPlace(scale: number): Vector4;
        /**
         * Returns a new Vector4 set with the current Vector4 coordinates multiplied by scale (float).
         */
        scale(scale: number): Vector4;
        /**
         * Sets the given vector "result" with the current Vector4 coordinates multiplied by scale (float).
         * Returns the current Vector4.
         */
        scaleToRef(scale: number, result: Vector4): Vector4;
        /**
         * Scale the current Vector4 values by a factor and add the result to a given Vector4
         * @param scale defines the scale factor
         * @param result defines the Vector4 object where to store the result
         * @returns the unmodified current Vector4
         */
        scaleAndAddToRef(scale: number, result: Vector4): Vector4;
        /**
         * Boolean : True if the current Vector4 coordinates are stricly equal to the given ones.
         */
        equals(otherVector: Vector4): boolean;
        /**
         * Boolean : True if the current Vector4 coordinates are each beneath the distance "epsilon" from the given vector ones.
         */
        equalsWithEpsilon(otherVector: Vector4, epsilon?: number): boolean;
        /**
         * Boolean : True if the given floats are strictly equal to the current Vector4 coordinates.
         */
        equalsToFloats(x: number, y: number, z: number, w: number): boolean;
        /**
         * Multiplies in place the current Vector4 by the given one.
         * Returns the updated Vector4.
         */
        multiplyInPlace(otherVector: Vector4): Vector4;
        /**
         * Returns a new Vector4 set with the multiplication result of the current Vector4 and the given one.
         */
        multiply(otherVector: Vector4): Vector4;
        /**
         * Updates the given vector "result" with the multiplication result of the current Vector4 and the given one.
         * Returns the current Vector4.
         */
        multiplyToRef(otherVector: Vector4, result: Vector4): Vector4;
        /**
         * Returns a new Vector4 set with the multiplication result of the given floats and the current Vector4 coordinates.
         */
        multiplyByFloats(x: number, y: number, z: number, w: number): Vector4;
        /**
         * Returns a new Vector4 set with the division result of the current Vector4 by the given one.
         */
        divide(otherVector: Vector4): Vector4;
        /**
         * Updates the given vector "result" with the division result of the current Vector4 by the given one.
         * Returns the current Vector4.
         */
        divideToRef(otherVector: Vector4, result: Vector4): Vector4;
        /**
         * Divides the current Vector3 coordinates by the given ones.
         * @returns the updated Vector3.
         */
        divideInPlace(otherVector: Vector4): Vector4;
        /**
         * Updates the Vector4 coordinates with the minimum values between its own and the given vector ones
         * @param other defines the second operand
         * @returns the current updated Vector4
         */
        minimizeInPlace(other: Vector4): Vector4;
        /**
         * Updates the Vector4 coordinates with the maximum values between its own and the given vector ones
         * @param other defines the second operand
         * @returns the current updated Vector4
         */
        maximizeInPlace(other: Vector4): Vector4;
        /**
         * Gets a new Vector4 from current Vector4 floored values
         * @returns a new Vector4
         */
        floor(): Vector4;
        /**
         * Gets a new Vector4 from current Vector3 floored values
         * @returns a new Vector4
         */
        fract(): Vector4;
        /**
         * Returns the Vector4 length (float).
         */
        length(): number;
        /**
         * Returns the Vector4 squared length (float).
         */
        lengthSquared(): number;
        /**
         * Normalizes in place the Vector4.
         * Returns the updated Vector4.
         */
        normalize(): Vector4;
        /**
         * Returns a new Vector3 from the Vector4 (x, y, z) coordinates.
         */
        toVector3(): Vector3;
        /**
         * Returns a new Vector4 copied from the current one.
         */
        clone(): Vector4;
        /**
         * Updates the current Vector4 with the given one coordinates.
         * Returns the updated Vector4.
         */
        copyFrom(source: Vector4): Vector4;
        /**
         * Updates the current Vector4 coordinates with the given floats.
         * Returns the updated Vector4.
         */
        copyFromFloats(x: number, y: number, z: number, w: number): Vector4;
        /**
         * Updates the current Vector4 coordinates with the given floats.
         * Returns the updated Vector4.
         */
        set(x: number, y: number, z: number, w: number): Vector4;
        /**
         * Returns a new Vector4 set from the starting index of the given array.
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Vector4;
        /**
         * Updates the given vector "result" from the starting index of the given array.
         */
        static FromArrayToRef(array: ArrayLike<number>, offset: number, result: Vector4): void;
        /**
         * Updates the given vector "result" from the starting index of the given Float32Array.
         */
        static FromFloatArrayToRef(array: Float32Array, offset: number, result: Vector4): void;
        /**
         * Updates the given vector "result" coordinates from the given floats.
         */
        static FromFloatsToRef(x: number, y: number, z: number, w: number, result: Vector4): void;
        /**
         * Returns a new Vector4 set to (0.0, 0.0, 0.0, 0.0)
         */
        static Zero(): Vector4;
        /**
         * Returns a new Vector4 set to (1.0, 1.0, 1.0, 1.0)
         */
        static One(): Vector4;
        /**
         * Returns a new normalized Vector4 from the given one.
         */
        static Normalize(vector: Vector4): Vector4;
        /**
         * Updates the given vector "result" from the normalization of the given one.
         */
        static NormalizeToRef(vector: Vector4, result: Vector4): void;
        static Minimize(left: Vector4, right: Vector4): Vector4;
        static Maximize(left: Vector4, right: Vector4): Vector4;
        /**
         * Returns the distance (float) between the vectors "value1" and "value2".
         */
        static Distance(value1: Vector4, value2: Vector4): number;
        /**
         * Returns the squared distance (float) between the vectors "value1" and "value2".
         */
        static DistanceSquared(value1: Vector4, value2: Vector4): number;
        /**
         * Returns a new Vector4 located at the center between the vectors "value1" and "value2".
         */
        static Center(value1: Vector4, value2: Vector4): Vector4;
        /**
         * Returns a new Vector4 set with the result of the normal transformation by the given matrix of the given vector.
         * This methods computes transformed normalized direction vectors only.
         */
        static TransformNormal(vector: Vector4, transformation: Matrix): Vector4;
        /**
         * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector.
         * This methods computes transformed normalized direction vectors only.
         */
        static TransformNormalToRef(vector: Vector4, transformation: Matrix, result: Vector4): void;
        /**
         * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z, w).
         * This methods computes transformed normalized direction vectors only.
         */
        static TransformNormalFromFloatsToRef(x: number, y: number, z: number, w: number, transformation: Matrix, result: Vector4): void;
    }
    interface ISize {
        width: number;
        height: number;
    }
    class Size implements ISize {
        width: number;
        height: number;
        /**
         * Creates a Size object from the given width and height (floats).
         */
        constructor(width: number, height: number);
        toString(): string;
        /**
         * Returns the string "Size"
         */
        getClassName(): string;
        /**
         * Returns the Size hash code.
         */
        getHashCode(): number;
        /**
         * Updates the current size from the given one.
         * Returns the updated Size.
         */
        copyFrom(src: Size): void;
        /**
         * Updates in place the current Size from the given floats.
         * Returns the updated Size.
         */
        copyFromFloats(width: number, height: number): Size;
        /**
         * Updates in place the current Size from the given floats.
         * Returns the updated Size.
         */
        set(width: number, height: number): Size;
        /**
         * Returns a new Size set with the multiplication result of the current Size and the given floats.
         */
        multiplyByFloats(w: number, h: number): Size;
        /**
         * Returns a new Size copied from the given one.
         */
        clone(): Size;
        /**
         * Boolean : True if the current Size and the given one width and height are strictly equal.
         */
        equals(other: Size): boolean;
        /**
         * Returns the surface of the Size : width * height (float).
         */
        readonly surface: number;
        /**
         * Returns a new Size set to (0.0, 0.0)
         */
        static Zero(): Size;
        /**
         * Returns a new Size set as the addition result of the current Size and the given one.
         */
        add(otherSize: Size): Size;
        /**
         * Returns a new Size set as the subtraction result of  the given one from the current Size.
         */
        subtract(otherSize: Size): Size;
        /**
         * Returns a new Size set at the linear interpolation "amount" between "start" and "end".
         */
        static Lerp(start: Size, end: Size, amount: number): Size;
    }
    /**
     * Class used to store quaternion data
     * @see https://en.wikipedia.org/wiki/Quaternion
     * @see http://doc.babylonjs.com/features/position,_rotation,_scaling
     */
    class Quaternion {
        /** defines the first component (0 by default) */
        x: number;
        /** defines the second component (0 by default) */
        y: number;
        /** defines the third component (0 by default) */
        z: number;
        /** defines the fourth component (1.0 by default) */
        w: number;
        /**
         * Creates a new Quaternion from the given floats
         * @param x defines the first component (0 by default)
         * @param y defines the second component (0 by default)
         * @param z defines the third component (0 by default)
         * @param w defines the fourth component (1.0 by default)
         */
        constructor(
        /** defines the first component (0 by default) */
        x?: number, 
        /** defines the second component (0 by default) */
        y?: number, 
        /** defines the third component (0 by default) */
        z?: number, 
        /** defines the fourth component (1.0 by default) */
        w?: number);
        /**
         * Gets a string representation for the current quaternion
         * @returns a string with the Quaternion coordinates
         */
        toString(): string;
        /**
         * Gets the class name of the quaternion
         * @returns the string "Quaternion"
         */
        getClassName(): string;
        /**
         * Gets a hash code for this quaternion
         * @returns the quaternion hash code
         */
        getHashCode(): number;
        /**
         * Copy the quaternion to an array
         * @returns a new array populated with 4 elements from the quaternion coordinates
         */
        asArray(): number[];
        /**
         * Check if two quaternions are equals
         * @param otherQuaternion defines the second operand
         * @return true if the current quaternion and the given one coordinates are strictly equals
         */
        equals(otherQuaternion: Quaternion): boolean;
        /**
         * Clone the current quaternion
         * @returns a new quaternion copied from the current one
         */
        clone(): Quaternion;
        /**
         * Copy a quaternion to the current one
         * @param other defines the other quaternion
         * @returns the updated current quaternion
         */
        copyFrom(other: Quaternion): Quaternion;
        /**
         * Updates the current quaternion with the given float coordinates
         * @param x defines the x coordinate
         * @param y defines the y coordinate
         * @param z defines the z coordinate
         * @param w defines the w coordinate
         * @returns the updated current quaternion
         */
        copyFromFloats(x: number, y: number, z: number, w: number): Quaternion;
        /**
         * Updates the current quaternion from the given float coordinates
         * @param x defines the x coordinate
         * @param y defines the y coordinate
         * @param z defines the z coordinate
         * @param w defines the w coordinate
         * @returns the updated current quaternion
         */
        set(x: number, y: number, z: number, w: number): Quaternion;
        /**
         * Adds two quaternions
         * @param other defines the second operand
         * @returns a new quaternion as the addition result of the given one and the current quaternion
         */
        add(other: Quaternion): Quaternion;
        /**
         * Add a quaternion to the current one
         * @param other defines the quaternion to add
         * @returns the current quaternion
         */
        addInPlace(other: Quaternion): Quaternion;
        /**
         * Subtract two quaternions
         * @param other defines the second operand
         * @returns a new quaternion as the subtraction result of the given one from the current one
         */
        subtract(other: Quaternion): Quaternion;
        /**
         * Multiplies the current quaternion by a scale factor
         * @param value defines the scale factor
         * @returns a new quaternion set by multiplying the current quaternion coordinates by the float "scale"
         */
        scale(value: number): Quaternion;
        /**
         * Scale the current quaternion values by a factor and stores the result to a given quaternion
         * @param scale defines the scale factor
         * @param result defines the Quaternion object where to store the result
         * @returns the unmodified current quaternion
         */
        scaleToRef(scale: number, result: Quaternion): Quaternion;
        /**
         * Multiplies in place the current quaternion by a scale factor
         * @param value defines the scale factor
         * @returns the current modified quaternion
         */
        scaleInPlace(value: number): Quaternion;
        /**
         * Scale the current quaternion values by a factor and add the result to a given quaternion
         * @param scale defines the scale factor
         * @param result defines the Quaternion object where to store the result
         * @returns the unmodified current quaternion
         */
        scaleAndAddToRef(scale: number, result: Quaternion): Quaternion;
        /**
         * Multiplies two quaternions
         * @param q1 defines the second operand
         * @returns a new quaternion set as the multiplication result of the current one with the given one "q1"
         */
        multiply(q1: Quaternion): Quaternion;
        /**
         * Sets the given "result" as the the multiplication result of the current one with the given one "q1"
         * @param q1 defines the second operand
         * @param result defines the target quaternion
         * @returns the current quaternion
         */
        multiplyToRef(q1: Quaternion, result: Quaternion): Quaternion;
        /**
         * Updates the current quaternion with the multiplication of itself with the given one "q1"
         * @param q1 defines the second operand
         * @returns the currentupdated quaternion
         */
        multiplyInPlace(q1: Quaternion): Quaternion;
        /**
         * Conjugates (1-q) the current quaternion and stores the result in the given quaternion
         * @param ref defines the target quaternion
         * @returns the current quaternion
         */
        conjugateToRef(ref: Quaternion): Quaternion;
        /**
         * Conjugates in place (1-q) the current quaternion
         * @returns the current updated quaternion
         */
        conjugateInPlace(): Quaternion;
        /**
         * Conjugates in place (1-q) the current quaternion
         * @returns a new quaternion
         */
        conjugate(): Quaternion;
        /**
         * Gets length of current quaternion
         * @returns the quaternion length (float)
         */
        length(): number;
        /**
         * Normalize in place the current quaternion
         * @returns the current updated quaternion
         */
        normalize(): Quaternion;
        /**
         * Returns a new Vector3 set with the Euler angles translated from the current quaternion
         * @param order is a reserved parameter and is ignore for now
         * @returns a new Vector3 containing the Euler angles
         */
        toEulerAngles(order?: string): Vector3;
        /**
         * Sets the given vector3 "result" with the Euler angles translated from the current quaternion
         * @param result defines the vector which will be filled with the Euler angles
         * @param order is a reserved parameter and is ignore for now
         * @returns the current unchanged quaternion
         */
        toEulerAnglesToRef(result: Vector3, order?: string): Quaternion;
        /**
         * Updates the given rotation matrix with the current quaternion values
         * @param result defines the target matrix
         * @returns the current unchanged quaternion
         */
        toRotationMatrix(result: Matrix): Quaternion;
        /**
         * Updates the current quaternion from the given rotation matrix values
         * @param matrix defines the source matrix
         * @returns the current updated quaternion
         */
        fromRotationMatrix(matrix: Matrix): Quaternion;
        /**
         * Creates a new quaternion from a rotation matrix
         * @param matrix defines the source matrix
         * @returns a new quaternion created from the given rotation matrix values
         */
        static FromRotationMatrix(matrix: Matrix): Quaternion;
        /**
         * Updates the given quaternion with the given rotation matrix values
         * @param matrix defines the source matrix
         * @param result defines the target quaternion
         */
        static FromRotationMatrixToRef(matrix: Matrix, result: Quaternion): void;
        /**
         * Returns the dot product (float) between the quaternions "left" and "right"
         * @param left defines the left operand
         * @param right defines the right operand
         * @returns the dot product
         */
        static Dot(left: Quaternion, right: Quaternion): number;
        /**
         * Checks if the two quaternions are close to each other
         * @param quat0 defines the first quaternion to check
         * @param quat1 defines the second quaternion to check
         * @returns true if the two quaternions are close to each other
         */
        static AreClose(quat0: Quaternion, quat1: Quaternion): boolean;
        /**
         * Creates an empty quaternion
         * @returns a new quaternion set to (0.0, 0.0, 0.0)
         */
        static Zero(): Quaternion;
        /**
         * Inverse a given quaternion
         * @param q defines the source quaternion
         * @returns a new quaternion as the inverted current quaternion
         */
        static Inverse(q: Quaternion): Quaternion;
        /**
         * Creates an identity quaternion
         * @returns the identity quaternion
         */
        static Identity(): Quaternion;
        /**
         * Gets a boolean indicating if the given quaternion is identity
         * @param quaternion defines the quaternion to check
         * @returns true if the quaternion is identity
         */
        static IsIdentity(quaternion: Quaternion): boolean;
        /**
         * Creates a quaternion from a rotation around an axis
         * @param axis defines the axis to use
         * @param angle defines the angle to use
         * @returns a new quaternion created from the given axis (Vector3) and angle in radians (float)
         */
        static RotationAxis(axis: Vector3, angle: number): Quaternion;
        /**
         * Creates a rotation around an axis and stores it into the given quaternion
         * @param axis defines the axis to use
         * @param angle defines the angle to use
         * @param result defines the target quaternion
         * @returns the target quaternion
         */
        static RotationAxisToRef(axis: Vector3, angle: number, result: Quaternion): Quaternion;
        /**
         * Creates a new quaternion from data stored into an array
         * @param array defines the data source
         * @param offset defines the offset in the source array where the data starts
         * @returns a new quaternion
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Quaternion;
        /**
         * Creates a new quaternion from the given Euler float angles (y, x, z)
         * @param yaw defines the rotation around Y axis
         * @param pitch defines the rotation around X axis
         * @param roll defines the rotation around Z axis
         * @returns the new quaternion
         */
        static RotationYawPitchRoll(yaw: number, pitch: number, roll: number): Quaternion;
        /**
         * Creates a new rotation from the given Euler float angles (y, x, z) and stores it in the target quaternion
         * @param yaw defines the rotation around Y axis
         * @param pitch defines the rotation around X axis
         * @param roll defines the rotation around Z axis
         * @param result defines the target quaternion
         */
        static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Quaternion): void;
        /**
         * Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation
         * @param alpha defines the rotation around first axis
         * @param beta defines the rotation around second axis
         * @param gamma defines the rotation around third axis
         * @returns the new quaternion
         */
        static RotationAlphaBetaGamma(alpha: number, beta: number, gamma: number): Quaternion;
        /**
         * Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation and stores it in the target quaternion
         * @param alpha defines the rotation around first axis
         * @param beta defines the rotation around second axis
         * @param gamma defines the rotation around third axis
         * @param result defines the target quaternion
         */
        static RotationAlphaBetaGammaToRef(alpha: number, beta: number, gamma: number, result: Quaternion): void;
        /**
         * Creates a new quaternion containing the rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation)
         * @param axis1 defines the first axis
         * @param axis2 defines the second axis
         * @param axis3 defines the third axis
         * @returns the new quaternion
         */
        static RotationQuaternionFromAxis(axis1: Vector3, axis2: Vector3, axis3: Vector3): Quaternion;
        /**
         * Creates a rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation) and stores it in the target quaternion
         * @param axis1 defines the first axis
         * @param axis2 defines the second axis
         * @param axis3 defines the third axis
         * @param ref defines the target quaternion
         */
        static RotationQuaternionFromAxisToRef(axis1: Vector3, axis2: Vector3, axis3: Vector3, ref: Quaternion): void;
        /**
         * Interpolates between two quaternions
         * @param left defines first quaternion
         * @param right defines second quaternion
         * @param amount defines the gradient to use
         * @returns the new interpolated quaternion
         */
        static Slerp(left: Quaternion, right: Quaternion, amount: number): Quaternion;
        /**
         * Interpolates between two quaternions and stores it into a target quaternion
         * @param left defines first quaternion
         * @param right defines second quaternion
         * @param amount defines the gradient to use
         * @param result defines the target quaternion
         */
        static SlerpToRef(left: Quaternion, right: Quaternion, amount: number, result: Quaternion): void;
        /**
         * Interpolate between two quaternions using Hermite interpolation
         * @param value1 defines first quaternion
         * @param tangent1 defines the incoming tangent
         * @param value2 defines second quaternion
         * @param tangent2 defines the outgoing tangent
         * @param amount defines the target quaternion
         * @returns the new interpolated quaternion
         */
        static Hermite(value1: Quaternion, tangent1: Quaternion, value2: Quaternion, tangent2: Quaternion, amount: number): Quaternion;
    }
    /**
     * Class used to store matrix data (4x4)
     */
    class Matrix {
        private static _tempQuaternion;
        private static _xAxis;
        private static _yAxis;
        private static _zAxis;
        private static _updateFlagSeed;
        private static _identityReadOnly;
        private _isIdentity;
        private _isIdentityDirty;
        /**
         * Gets the update flag of the matrix which is an unique number for the matrix.
         * It will be incremented every time the matrix data change.
         * You can use it to speed the comparison between two versions of the same matrix.
         */
        updateFlag: number;
        /**
         * Gets or sets the internal data of the matrix
         */
        m: Float32Array;
        /** @hidden */
        _markAsUpdated(): void;
        /**
         * Creates an empty matrix (filled with zeros)
         */
        constructor();
        /**
         * Check if the current matrix is indentity
         * @param considerAsTextureMatrix defines if the current matrix must be considered as a texture matrix (3x2)
         * @returns true is the matrix is the identity matrix
         */
        isIdentity(considerAsTextureMatrix?: boolean): boolean;
        /**
         * Gets the determinant of the matrix
         * @returns the matrix determinant
         */
        determinant(): number;
        /**
         * Returns the matrix as a Float32Array
         * @returns the matrix underlying array
         */
        toArray(): Float32Array;
        /**
         * Returns the matrix as a Float32Array
        * @returns the matrix underlying array.
        */
        asArray(): Float32Array;
        /**
         * Inverts the current matrix in place
         * @returns the current inverted matrix
         */
        invert(): Matrix;
        /**
         * Sets all the matrix elements to zero
         * @returns the current matrix
         */
        reset(): Matrix;
        /**
         * Adds the current matrix with a second one
         * @param other defines the matrix to add
         * @returns a new matrix as the addition of the current matrix and the given one
         */
        add(other: Matrix): Matrix;
        /**
         * Sets the given matrix "result" to the addition of the current matrix and the given one
         * @param other defines the matrix to add
         * @param result defines the target matrix
         * @returns the current matrix
         */
        addToRef(other: Matrix, result: Matrix): Matrix;
        /**
         * Adds in place the given matrix to the current matrix
         * @param other defines the second operand
         * @returns the current updated matrix
         */
        addToSelf(other: Matrix): Matrix;
        /**
         * Sets the given matrix to the current inverted Matrix
         * @param other defines the target matrix
         * @returns the unmodified current matrix
         */
        invertToRef(other: Matrix): Matrix;
        /**
         * Inserts the translation vector (using 3 floats) in the current matrix
         * @param x defines the 1st component of the translation
         * @param y defines the 2nd component of the translation
         * @param z defines the 3rd component of the translation
         * @returns the current updated matrix
         */
        setTranslationFromFloats(x: number, y: number, z: number): Matrix;
        /**
         * Inserts the translation vector in the current matrix
         * @param vector3 defines the translation to insert
         * @returns the current updated matrix
         */
        setTranslation(vector3: Vector3): Matrix;
        /**
         * Gets the translation value of the current matrix
         * @returns a new Vector3 as the extracted translation from the matrix
         */
        getTranslation(): Vector3;
        /**
         * Fill a Vector3 with the extracted translation from the matrix
         * @param result defines the Vector3 where to store the translation
         * @returns the current matrix
         */
        getTranslationToRef(result: Vector3): Matrix;
        /**
         * Remove rotation and scaling part from the matrix
         * @returns the updated matrix
         */
        removeRotationAndScaling(): Matrix;
        /**
         * Multiply two matrices
         * @param other defines the second operand
         * @returns a new matrix set with the multiplication result of the current Matrix and the given one
         */
        multiply(other: Matrix): Matrix;
        /**
         * Copy the current matrix from the given one
         * @param other defines the source matrix
         * @returns the current updated matrix
         */
        copyFrom(other: Matrix): Matrix;
        /**
         * Populates the given array from the starting index with the current matrix values
         * @param array defines the target array
         * @param offset defines the offset in the target array where to start storing values
         * @returns the current matrix
         */
        copyToArray(array: Float32Array, offset?: number): Matrix;
        /**
         * Sets the given matrix "result" with the multiplication result of the current Matrix and the given one
         * @param other defines the second operand
         * @param result defines the matrix where to store the multiplication
         * @returns the current matrix
         */
        multiplyToRef(other: Matrix, result: Matrix): Matrix;
        /**
         * Sets the Float32Array "result" from the given index "offset" with the multiplication of the current matrix and the given one
         * @param other defines the second operand
         * @param result defines the array where to store the multiplication
         * @param offset defines the offset in the target array where to start storing values
         * @returns the current matrix
         */
        multiplyToArray(other: Matrix, result: Float32Array, offset: number): Matrix;
        /**
         * Check equality between this matrix and a second one
         * @param value defines the second matrix to compare
         * @returns true is the current matrix and the given one values are strictly equal
         */
        equals(value: Matrix): boolean;
        /**
         * Clone the current matrix
         * @returns a new matrix from the current matrix
         */
        clone(): Matrix;
        /**
         * Returns the name of the current matrix class
         * @returns the string "Matrix"
         */
        getClassName(): string;
        /**
         * Gets the hash code of the current matrix
         * @returns the hash code
         */
        getHashCode(): number;
        /**
         * Decomposes the current Matrix into a translation, rotation and scaling components
         * @param scale defines the scale vector3 given as a reference to update
         * @param rotation defines the rotation quaternion given as a reference to update
         * @param translation defines the translation vector3 given as a reference to update
         * @returns true if operation was successful
         */
        decompose(scale?: Vector3, rotation?: Quaternion, translation?: Vector3): boolean;
        /**
         * Gets specific row of the matrix
         * @param index defines the number of the row to get
         * @returns the index-th row of the current matrix as a new Vector4
         */
        getRow(index: number): Nullable<Vector4>;
        /**
         * Sets the index-th row of the current matrix to the vector4 values
         * @param index defines the number of the row to set
         * @param row defines the target vector4
         * @returns the updated current matrix
         */
        setRow(index: number, row: Vector4): Matrix;
        /**
         * Compute the transpose of the matrix
         * @returns the new transposed matrix
         */
        transpose(): Matrix;
        /**
         * Compute the transpose of the matrix and store it in a given matrix
         * @param result defines the target matrix
         * @returns the current matrix
         */
        transposeToRef(result: Matrix): Matrix;
        /**
         * Sets the index-th row of the current matrix with the given 4 x float values
         * @param index defines the row index
         * @param x defines the x component to set
         * @param y defines the y component to set
         * @param z defines the z component to set
         * @param w defines the w component to set
         * @returns the updated current matrix
         */
        setRowFromFloats(index: number, x: number, y: number, z: number, w: number): Matrix;
        /**
         * Compute a new matrix set with the current matrix values multiplied by scale (float)
         * @param scale defines the scale factor
         * @returns a new matrix
         */
        scale(scale: number): Matrix;
        /**
         * Scale the current matrix values by a factor to a given result matrix
         * @param scale defines the scale factor
         * @param result defines the matrix to store the result
         * @returns the current matrix
         */
        scaleToRef(scale: number, result: Matrix): Matrix;
        /**
         * Scale the current matrix values by a factor and add the result to a given matrix
         * @param scale defines the scale factor
         * @param result defines the Matrix to store the result
         * @returns the current matrix
         */
        scaleAndAddToRef(scale: number, result: Matrix): Matrix;
        /**
         * Writes to the given matrix a normal matrix, computed from this one (using values from identity matrix for fourth row and column).
         * @param ref matrix to store the result
         */
        toNormalMatrix(ref: Matrix): void;
        /**
         * Gets only rotation part of the current matrix
         * @returns a new matrix sets to the extracted rotation matrix from the current one
         */
        getRotationMatrix(): Matrix;
        /**
         * Extracts the rotation matrix from the current one and sets it as the given "result"
         * @param result defines the target matrix to store data to
         * @returns the current matrix
         */
        getRotationMatrixToRef(result: Matrix): Matrix;
        /**
         * Creates a matrix from an array
         * @param array defines the source array
         * @param offset defines an offset in the source array
         * @returns a new Matrix set from the starting index of the given array
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Matrix;
        /**
         * Copy the content of an array into a given matrix
         * @param array defines the source array
         * @param offset defines an offset in the source array
         * @param result defines the target matrix
         */
        static FromArrayToRef(array: ArrayLike<number>, offset: number, result: Matrix): void;
        /**
         * Stores an array into a matrix after having multiplied each component by a given factor
         * @param array defines the source array
         * @param offset defines the offset in the source array
         * @param scale defines the scaling factor
         * @param result defines the target matrix
         */
        static FromFloat32ArrayToRefScaled(array: Float32Array, offset: number, scale: number, result: Matrix): void;
        /**
         * Stores a list of values (16) inside a given matrix
         * @param initialM11 defines 1st value of 1st row
         * @param initialM12 defines 2nd value of 1st row
         * @param initialM13 defines 3rd value of 1st row
         * @param initialM14 defines 4th value of 1st row
         * @param initialM21 defines 1st value of 2nd row
         * @param initialM22 defines 2nd value of 2nd row
         * @param initialM23 defines 3rd value of 2nd row
         * @param initialM24 defines 4th value of 2nd row
         * @param initialM31 defines 1st value of 3rd row
         * @param initialM32 defines 2nd value of 3rd row
         * @param initialM33 defines 3rd value of 3rd row
         * @param initialM34 defines 4th value of 3rd row
         * @param initialM41 defines 1st value of 4th row
         * @param initialM42 defines 2nd value of 4th row
         * @param initialM43 defines 3rd value of 4th row
         * @param initialM44 defines 4th value of 4th row
         * @param result defines the target matrix
         */
        static FromValuesToRef(initialM11: number, initialM12: number, initialM13: number, initialM14: number, initialM21: number, initialM22: number, initialM23: number, initialM24: number, initialM31: number, initialM32: number, initialM33: number, initialM34: number, initialM41: number, initialM42: number, initialM43: number, initialM44: number, result: Matrix): void;
        /**
         * Gets an identity matrix that must not be updated
         */
        static readonly IdentityReadOnly: Matrix;
        /**
         * Creates new matrix from a list of values (16)
         * @param initialM11 defines 1st value of 1st row
         * @param initialM12 defines 2nd value of 1st row
         * @param initialM13 defines 3rd value of 1st row
         * @param initialM14 defines 4th value of 1st row
         * @param initialM21 defines 1st value of 2nd row
         * @param initialM22 defines 2nd value of 2nd row
         * @param initialM23 defines 3rd value of 2nd row
         * @param initialM24 defines 4th value of 2nd row
         * @param initialM31 defines 1st value of 3rd row
         * @param initialM32 defines 2nd value of 3rd row
         * @param initialM33 defines 3rd value of 3rd row
         * @param initialM34 defines 4th value of 3rd row
         * @param initialM41 defines 1st value of 4th row
         * @param initialM42 defines 2nd value of 4th row
         * @param initialM43 defines 3rd value of 4th row
         * @param initialM44 defines 4th value of 4th row
         * @returns the new matrix
         */
        static FromValues(initialM11: number, initialM12: number, initialM13: number, initialM14: number, initialM21: number, initialM22: number, initialM23: number, initialM24: number, initialM31: number, initialM32: number, initialM33: number, initialM34: number, initialM41: number, initialM42: number, initialM43: number, initialM44: number): Matrix;
        /**
         * Creates a new matrix composed by merging scale (vector3), rotation (quaternion) and translation (vector3)
         * @param scale defines the scale vector3
         * @param rotation defines the rotation quaternion
         * @param translation defines the translation vector3
         * @returns a new matrix
         */
        static Compose(scale: Vector3, rotation: Quaternion, translation: Vector3): Matrix;
        /**
         * Sets a matrix to a value composed by merging scale (vector3), rotation (quaternion) and translation (vector3)
         * @param scale defines the scale vector3
         * @param rotation defines the rotation quaternion
         * @param translation defines the translation vector3
         * @param result defines the target matrix
         */
        static ComposeToRef(scale: Vector3, rotation: Quaternion, translation: Vector3, result: Matrix): void;
        /**
         * Creates a new identity matrix
         * @returns a new identity matrix
         */
        static Identity(): Matrix;
        /**
         * Creates a new identity matrix and stores the result in a given matrix
         * @param result defines the target matrix
         */
        static IdentityToRef(result: Matrix): void;
        /**
         * Creates a new zero matrix
         * @returns a new zero matrix
         */
        static Zero(): Matrix;
        /**
         * Creates a new rotation matrix for "angle" radians around the X axis
         * @param angle defines the angle (in radians) to use
         * @return the new matrix
         */
        static RotationX(angle: number): Matrix;
        /**
         * Creates a new matrix as the invert of a given matrix
         * @param source defines the source matrix
         * @returns the new matrix
         */
        static Invert(source: Matrix): Matrix;
        /**
         * Creates a new rotation matrix for "angle" radians around the X axis and stores it in a given matrix
         * @param angle defines the angle (in radians) to use
         * @param result defines the target matrix
         */
        static RotationXToRef(angle: number, result: Matrix): void;
        /**
         * Creates a new rotation matrix for "angle" radians around the Y axis
         * @param angle defines the angle (in radians) to use
         * @return the new matrix
         */
        static RotationY(angle: number): Matrix;
        /**
         * Creates a new rotation matrix for "angle" radians around the Y axis and stores it in a given matrix
         * @param angle defines the angle (in radians) to use
         * @param result defines the target matrix
         */
        static RotationYToRef(angle: number, result: Matrix): void;
        /**
         * Creates a new rotation matrix for "angle" radians around the Z axis
         * @param angle defines the angle (in radians) to use
         * @return the new matrix
         */
        static RotationZ(angle: number): Matrix;
        /**
         * Creates a new rotation matrix for "angle" radians around the Z axis and stores it in a given matrix
         * @param angle defines the angle (in radians) to use
         * @param result defines the target matrix
         */
        static RotationZToRef(angle: number, result: Matrix): void;
        /**
         * Creates a new rotation matrix for "angle" radians around the given axis
         * @param axis defines the axis to use
         * @param angle defines the angle (in radians) to use
         * @return the new matrix
         */
        static RotationAxis(axis: Vector3, angle: number): Matrix;
        /**
         * Creates a new rotation matrix for "angle" radians around the given axis and stores it in a given matrix
         * @param axis defines the axis to use
         * @param angle defines the angle (in radians) to use
         * @param result defines the target matrix
         */
        static RotationAxisToRef(axis: Vector3, angle: number, result: Matrix): void;
        /**
         * Creates a rotation matrix
         * @param yaw defines the yaw angle in radians (Y axis)
         * @param pitch defines the pitch angle in radians (X axis)
         * @param roll defines the roll angle in radians (X axis)
         * @returns the new rotation matrix
         */
        static RotationYawPitchRoll(yaw: number, pitch: number, roll: number): Matrix;
        /**
         * Creates a rotation matrix and stores it in a given matrix
         * @param yaw defines the yaw angle in radians (Y axis)
         * @param pitch defines the pitch angle in radians (X axis)
         * @param roll defines the roll angle in radians (X axis)
         * @param result defines the target matrix
         */
        static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Matrix): void;
        /**
         * Creates a scaling matrix
         * @param x defines the scale factor on X axis
         * @param y defines the scale factor on Y axis
         * @param z defines the scale factor on Z axis
         * @returns the new matrix
         */
        static Scaling(x: number, y: number, z: number): Matrix;
        /**
         * Creates a scaling matrix and stores it in a given matrix
         * @param x defines the scale factor on X axis
         * @param y defines the scale factor on Y axis
         * @param z defines the scale factor on Z axis
         * @param result defines the target matrix
         */
        static ScalingToRef(x: number, y: number, z: number, result: Matrix): void;
        /**
         * Creates a translation matrix
         * @param x defines the translation on X axis
         * @param y defines the translation on Y axis
         * @param z defines the translationon Z axis
         * @returns the new matrix
         */
        static Translation(x: number, y: number, z: number): Matrix;
        /**
         * Creates a translation matrix and stores it in a given matrix
         * @param x defines the translation on X axis
         * @param y defines the translation on Y axis
         * @param z defines the translationon Z axis
         * @param result defines the target matrix
         */
        static TranslationToRef(x: number, y: number, z: number, result: Matrix): void;
        /**
         * Returns a new Matrix whose values are the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
         * @param startValue defines the start value
         * @param endValue defines the end value
         * @param gradient defines the gradient factor
         * @returns the new matrix
         */
        static Lerp(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
        /**
         * Set the given matrix "result" as the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
         * @param startValue defines the start value
         * @param endValue defines the end value
         * @param gradient defines the gradient factor
         * @param result defines the Matrix object where to store data
         */
        static LerpToRef(startValue: Matrix, endValue: Matrix, gradient: number, result: Matrix): void;
        /**
         * Builds a new matrix whose values are computed by:
         * * decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices
         * * interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end
         * * recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices
         * @param startValue defines the first matrix
         * @param endValue defines the second matrix
         * @param gradient defines the gradient between the two matrices
         * @returns the new matrix
         */
        static DecomposeLerp(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
        /**
         * Update a matrix to values which are computed by:
         * * decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices
         * * interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end
         * * recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices
         * @param startValue defines the first matrix
         * @param endValue defines the second matrix
         * @param gradient defines the gradient between the two matrices
         * @param result defines the target matrix
         */
        static DecomposeLerpToRef(startValue: Matrix, endValue: Matrix, gradient: number, result: Matrix): void;
        /**
         * Gets a new rotation matrix used to rotate an entity so as it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up"
         * This function works in left handed mode
         * @param eye defines the final position of the entity
         * @param target defines where the entity should look at
         * @param up defines the up vector for the entity
         * @returns the new matrix
         */
        static LookAtLH(eye: Vector3, target: Vector3, up: Vector3): Matrix;
        /**
         * Sets the given "result" Matrix to a rotation matrix used to rotate an entity so that it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up".
         * This function works in left handed mode
         * @param eye defines the final position of the entity
         * @param target defines where the entity should look at
         * @param up defines the up vector for the entity
         * @param result defines the target matrix
         */
        static LookAtLHToRef(eye: Vector3, target: Vector3, up: Vector3, result: Matrix): void;
        /**
         * Gets a new rotation matrix used to rotate an entity so as it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up"
         * This function works in right handed mode
         * @param eye defines the final position of the entity
         * @param target defines where the entity should look at
         * @param up defines the up vector for the entity
         * @returns the new matrix
         */
        static LookAtRH(eye: Vector3, target: Vector3, up: Vector3): Matrix;
        /**
         * Sets the given "result" Matrix to a rotation matrix used to rotate an entity so that it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up".
         * This function works in right handed mode
         * @param eye defines the final position of the entity
         * @param target defines where the entity should look at
         * @param up defines the up vector for the entity
         * @param result defines the target matrix
         */
        static LookAtRHToRef(eye: Vector3, target: Vector3, up: Vector3, result: Matrix): void;
        /**
         * Create a left-handed orthographic projection matrix
         * @param width defines the viewport width
         * @param height defines the viewport height
         * @param znear defines the near clip plane
         * @param zfar defines the far clip plane
         * @returns a new matrix as a left-handed orthographic projection matrix
         */
        static OrthoLH(width: number, height: number, znear: number, zfar: number): Matrix;
        /**
         * Store a left-handed orthographic projection to a given matrix
         * @param width defines the viewport width
         * @param height defines the viewport height
         * @param znear defines the near clip plane
         * @param zfar defines the far clip plane
         * @param result defines the target matrix
         */
        static OrthoLHToRef(width: number, height: number, znear: number, zfar: number, result: Matrix): void;
        /**
         * Create a left-handed orthographic projection matrix
         * @param left defines the viewport left coordinate
         * @param right defines the viewport right coordinate
         * @param bottom defines the viewport bottom coordinate
         * @param top defines the viewport top coordinate
         * @param znear defines the near clip plane
         * @param zfar defines the far clip plane
         * @returns a new matrix as a left-handed orthographic projection matrix
         */
        static OrthoOffCenterLH(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): Matrix;
        /**
         * Stores a left-handed orthographic projection into a given matrix
         * @param left defines the viewport left coordinate
         * @param right defines the viewport right coordinate
         * @param bottom defines the viewport bottom coordinate
         * @param top defines the viewport top coordinate
         * @param znear defines the near clip plane
         * @param zfar defines the far clip plane
         * @param result defines the target matrix
         */
        static OrthoOffCenterLHToRef(left: number, right: number, bottom: number, top: number, znear: number, zfar: number, result: Matrix): void;
        /**
         * Creates a right-handed orthographic projection matrix
         * @param left defines the viewport left coordinate
         * @param right defines the viewport right coordinate
         * @param bottom defines the viewport bottom coordinate
         * @param top defines the viewport top coordinate
         * @param znear defines the near clip plane
         * @param zfar defines the far clip plane
         * @returns a new matrix as a right-handed orthographic projection matrix
         */
        static OrthoOffCenterRH(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): Matrix;
        /**
         * Stores a right-handed orthographic projection into a given matrix
         * @param left defines the viewport left coordinate
         * @param right defines the viewport right coordinate
         * @param bottom defines the viewport bottom coordinate
         * @param top defines the viewport top coordinate
         * @param znear defines the near clip plane
         * @param zfar defines the far clip plane
         * @param result defines the target matrix
         */
        static OrthoOffCenterRHToRef(left: number, right: number, bottom: number, top: number, znear: number, zfar: number, result: Matrix): void;
        /**
         * Creates a left-handed perspective projection matrix
         * @param width defines the viewport width
         * @param height defines the viewport height
         * @param znear defines the near clip plane
         * @param zfar defines the far clip plane
         * @returns a new matrix as a left-handed perspective projection matrix
         */
        static PerspectiveLH(width: number, height: number, znear: number, zfar: number): Matrix;
        /**
         * Creates a left-handed perspective projection matrix
         * @param fov defines the horizontal field of view
         * @param aspect defines the aspect ratio
         * @param znear defines the near clip plane
         * @param zfar defines the far clip plane
         * @returns a new matrix as a left-handed perspective projection matrix
         */
        static PerspectiveFovLH(fov: number, aspect: number, znear: number, zfar: number): Matrix;
        /**
         * Stores a left-handed perspective projection into a given matrix
         * @param fov defines the horizontal field of view
         * @param aspect defines the aspect ratio
         * @param znear defines the near clip plane
         * @param zfar defines the far clip plane
         * @param result defines the target matrix
         * @param isVerticalFovFixed defines it the fov is vertically fixed (default) or horizontally
         */
        static PerspectiveFovLHToRef(fov: number, aspect: number, znear: number, zfar: number, result: Matrix, isVerticalFovFixed?: boolean): void;
        /**
         * Creates a right-handed perspective projection matrix
         * @param fov defines the horizontal field of view
         * @param aspect defines the aspect ratio
         * @param znear defines the near clip plane
         * @param zfar defines the far clip plane
         * @returns a new matrix as a right-handed perspective projection matrix
         */
        static PerspectiveFovRH(fov: number, aspect: number, znear: number, zfar: number): Matrix;
        /**
         * Stores a right-handed perspective projection into a given matrix
         * @param fov defines the horizontal field of view
         * @param aspect defines the aspect ratio
         * @param znear defines the near clip plane
         * @param zfar defines the far clip plane
         * @param result defines the target matrix
         * @param isVerticalFovFixed defines it the fov is vertically fixed (default) or horizontally
         */
        static PerspectiveFovRHToRef(fov: number, aspect: number, znear: number, zfar: number, result: Matrix, isVerticalFovFixed?: boolean): void;
        /**
         * Stores a perspective projection for WebVR info a given matrix
         * @param fov defines the field of view
         * @param znear defines the near clip plane
         * @param zfar defines the far clip plane
         * @param result defines the target matrix
         * @param rightHanded defines if the matrix must be in right-handed mode (false by default)
         */
        static PerspectiveFovWebVRToRef(fov: {
            upDegrees: number;
            downDegrees: number;
            leftDegrees: number;
            rightDegrees: number;
        }, znear: number, zfar: number, result: Matrix, rightHanded?: boolean): void;
        /**
         * Computes a complete transformation matrix
         * @param viewport defines the viewport to use
         * @param world defines the world matrix
         * @param view defines the view matrix
         * @param projection defines the projection matrix
         * @param zmin defines the near clip plane
         * @param zmax defines the far clip plane
         * @returns the transformation matrix
         */
        static GetFinalMatrix(viewport: rect, world: Matrix, view: Matrix, projection: Matrix, zmin: number, zmax: number): Matrix;
        /**
         * Extracts a 2x2 matrix from a given matrix and store the result in a Float32Array
         * @param matrix defines the matrix to use
         * @returns a new Float32Array array with 4 elements : the 2x2 matrix extracted from the given matrix
         */
        static GetAsMatrix2x2(matrix: Matrix): Float32Array;
        /**
         * Extracts a 3x3 matrix from a given matrix and store the result in a Float32Array
         * @param matrix defines the matrix to use
         * @returns a new Float32Array array with 9 elements : the 3x3 matrix extracted from the given matrix
         */
        static GetAsMatrix3x3(matrix: Matrix): Float32Array;
        /**
         * Compute the transpose of a given matrix
         * @param matrix defines the matrix to transpose
         * @returns the new matrix
         */
        static Transpose(matrix: Matrix): Matrix;
        /**
         * Compute the transpose of a matrix and store it in a target matrix
         * @param matrix defines the matrix to transpose
         * @param result defines the target matrix
         */
        static TransposeToRef(matrix: Matrix, result: Matrix): void;
        /**
         * Computes a reflection matrix from a plane
         * @param plane defines the reflection plane
         * @returns a new matrix
         */
        static Reflection(plane: Plane): Matrix;
        /**
         * Computes a reflection matrix from a plane
         * @param plane defines the reflection plane
         * @param result defines the target matrix
         */
        static ReflectionToRef(plane: Plane, result: Matrix): void;
        /**
         * Sets the given matrix as a rotation matrix composed from the 3 left handed axes
         * @param xaxis defines the value of the 1st axis
         * @param yaxis defines the value of the 2nd axis
         * @param zaxis defines the value of the 3rd axis
         * @param result defines the target matrix
         */
        static FromXYZAxesToRef(xaxis: Vector3, yaxis: Vector3, zaxis: Vector3, result: Matrix): void;
        /**
         * Creates a rotation matrix from a quaternion and stores it in a target matrix
         * @param quat defines the quaternion to use
         * @param result defines the target matrix
         */
        static FromQuaternionToRef(quat: Quaternion, result: Matrix): void;
    }
    class Plane {
        normal: Vector3;
        d: number;
        /**
         * Creates a Plane object according to the given floats a, b, c, d and the plane equation : ax + by + cz + d = 0
         */
        constructor(a: number, b: number, c: number, d: number);
        /**
         * Returns the plane coordinates as a new array of 4 elements [a, b, c, d].
         */
        asArray(): number[];
        /**
         * Returns a new plane copied from the current Plane.
         */
        clone(): Plane;
        /**
         * Returns the string "Plane".
         */
        getClassName(): string;
        /**
         * Returns the Plane hash code.
         */
        getHashCode(): number;
        /**
         * Normalize the current Plane in place.
         * Returns the updated Plane.
         */
        normalize(): Plane;
        /**
         * Returns a new Plane as the result of the transformation of the current Plane by the given matrix.
         */
        transform(transformation: Matrix): Plane;
        /**
         * Returns the dot product (float) of the point coordinates and the plane normal.
         */
        dotCoordinate(point: Vector3): number;
        /**
         * Updates the current Plane from the plane defined by the three given points.
         * Returns the updated Plane.
         */
        copyFromPoints(point1: Vector3, point2: Vector3, point3: Vector3): Plane;
        /**
         * Boolean : True is the vector "direction"  is the same side than the plane normal.
         */
        isFrontFacingTo(direction: Vector3, epsilon: number): boolean;
        /**
         * Returns the signed distance (float) from the given point to the Plane.
         */
        signedDistanceTo(point: Vector3): number;
        /**
         * Returns a new Plane from the given array.
         */
        static FromArray(array: ArrayLike<number>): Plane;
        /**
         * Returns a new Plane defined by the three given points.
         */
        static FromPoints(point1: Vector3, point2: Vector3, point3: Vector3): Plane;
        /**
         * Returns a new Plane the normal vector to this plane at the given origin point.
         * Note : the vector "normal" is updated because normalized.
         */
        static FromPositionAndNormal(origin: Vector3, normal: Vector3): Plane;
        /**
         * Returns the signed distance between the plane defined by the normal vector at the "origin"" point and the given other point.
         */
        static SignedDistanceToPlaneFromPositionAndNormal(origin: Vector3, normal: Vector3, point: Vector3): number;
    }
    class rect {
        x: number;
        y: number;
        w: number;
        h: number;
        /**
         * Creates a Viewport object located at (x, y) and sized (width, height).
         */
        constructor(x: number, y: number, w: number, h: number);
        /**
         * Returns a new Viewport copied from the current one.
         */
        clone(): rect;
    }
    class Frustum {
        /**
         * Returns a new array of 6 Frustum planes computed by the given transformation matrix.
         */
        static GetPlanes(transform: Matrix): Plane[];
        static GetNearPlaneToRef(transform: Matrix, frustumPlane: Plane): void;
        static GetFarPlaneToRef(transform: Matrix, frustumPlane: Plane): void;
        static GetLeftPlaneToRef(transform: Matrix, frustumPlane: Plane): void;
        static GetRightPlaneToRef(transform: Matrix, frustumPlane: Plane): void;
        static GetTopPlaneToRef(transform: Matrix, frustumPlane: Plane): void;
        static GetBottomPlaneToRef(transform: Matrix, frustumPlane: Plane): void;
        /**
         * Sets the given array "frustumPlanes" with the 6 Frustum planes computed by the given transformation matrix.
         */
        static GetPlanesToRef(transform: Matrix, frustumPlanes: Plane[]): void;
    }
    /** Defines supported spaces */
    enum Space {
        /** Local (object) space */
        LOCAL = 0,
        /** World space */
        WORLD = 1,
        /** Bone space */
        BONE = 2
    }
    /** Defines the 3 main axes */
    class Axis {
        /** X axis */
        static X: Vector3;
        /** Y axis */
        static Y: Vector3;
        /** Z axis */
        static Z: Vector3;
    }
    class BezierCurve {
        /**
         * Returns the cubic Bezier interpolated value (float) at "t" (float) from the given x1, y1, x2, y2 floats.
         */
        static interpolate(t: number, x1: number, y1: number, x2: number, y2: number): number;
    }
    /**
     * Defines potential orientation for back face culling
     */
    enum Orientation {
        /**
         * Clockwise
         */
        CW = 0,
        /** Counter clockwise */
        CCW = 1
    }
    /**
     * Defines angle representation
     */
    class Angle {
        private _radians;
        /**
         * Creates an Angle object of "radians" radians (float).
         */
        constructor(radians: number);
        /**
         * Get value in degrees
         * @returns the Angle value in degrees (float)
         */
        degrees(): number;
        /**
         * Get value in radians
         * @returns the Angle value in radians (float)
         */
        radians(): number;
        /**
         * Gets a new Angle object valued with the angle value in radians between the two given vectors
         * @param a defines first vector
         * @param b defines second vector
         * @returns a new Angle
         */
        static BetweenTwoPoints(a: Vector2, b: Vector2): Angle;
        /**
         * Gets a new Angle object from the given float in radians
         * @param radians defines the angle value in radians
         * @returns a new Angle
         */
        static FromRadians(radians: number): Angle;
        /**
         * Gets a new Angle object from the given float in degrees
         * @param degrees defines the angle value in degrees
         * @returns a new Angle
         */
        static FromDegrees(degrees: number): Angle;
    }
    class Arc2 {
        startPoint: Vector2;
        midPoint: Vector2;
        endPoint: Vector2;
        centerPoint: Vector2;
        radius: number;
        angle: Angle;
        startAngle: Angle;
        orientation: Orientation;
        /**
         * Creates an Arc object from the three given points : start, middle and end.
         */
        constructor(startPoint: Vector2, midPoint: Vector2, endPoint: Vector2);
    }
    class Path2 {
        private _points;
        private _length;
        closed: boolean;
        /**
         * Creates a Path2 object from the starting 2D coordinates x and y.
         */
        constructor(x: number, y: number);
        /**
         * Adds a new segment until the given coordinates (x, y) to the current Path2.
         * Returns the updated Path2.
         */
        addLineTo(x: number, y: number): Path2;
        /**
         * Adds _numberOfSegments_ segments according to the arc definition (middle point coordinates, end point coordinates, the arc start point being the current Path2 last point) to the current Path2.
         * Returns the updated Path2.
         */
        addArcTo(midX: number, midY: number, endX: number, endY: number, numberOfSegments?: number): Path2;
        /**
         * Closes the Path2.
         * Returns the Path2.
         */
        close(): Path2;
        /**
         * Returns the Path2 total length (float).
         */
        length(): number;
        /**
         * Returns the Path2 internal array of points.
         */
        getPoints(): Vector2[];
        /**
         * Returns a new Vector2 located at a percentage of the Path2 total length on this path.
         */
        getPointAtLengthPosition(normalizedLengthPosition: number): Vector2;
        /**
         * Returns a new Path2 starting at the coordinates (x, y).
         */
        static StartingAt(x: number, y: number): Path2;
    }
    class Path3D {
        path: Vector3[];
        private _curve;
        private _distances;
        private _tangents;
        private _normals;
        private _binormals;
        private _raw;
        /**
        * new Path3D(path, normal, raw)
        * Creates a Path3D. A Path3D is a logical math object, so not a mesh.
        * please read the description in the tutorial :  http://doc.babylonjs.com/tutorials/How_to_use_Path3D
        * path : an array of Vector3, the curve axis of the Path3D
        * normal (optional) : Vector3, the first wanted normal to the curve. Ex (0, 1, 0) for a vertical normal.
        * raw (optional, default false) : boolean, if true the returned Path3D isn't normalized. Useful to depict path acceleration or speed.
        */
        constructor(path: Vector3[], firstNormal?: Nullable<Vector3>, raw?: boolean);
        /**
         * Returns the Path3D array of successive Vector3 designing its curve.
         */
        getCurve(): Vector3[];
        /**
         * Returns an array populated with tangent vectors on each Path3D curve point.
         */
        getTangents(): Vector3[];
        /**
         * Returns an array populated with normal vectors on each Path3D curve point.
         */
        getNormals(): Vector3[];
        /**
         * Returns an array populated with binormal vectors on each Path3D curve point.
         */
        getBinormals(): Vector3[];
        /**
         * Returns an array populated with distances (float) of the i-th point from the first curve point.
         */
        getDistances(): number[];
        /**
         * Forces the Path3D tangent, normal, binormal and distance recomputation.
         * Returns the same object updated.
         */
        update(path: Vector3[], firstNormal?: Nullable<Vector3>): Path3D;
        private _compute;
        private _getFirstNonNullVector;
        private _getLastNonNullVector;
        private _normalVector;
    }
    class Curve3 {
        private _points;
        private _length;
        /**
         * Returns a Curve3 object along a Quadratic Bezier curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#quadratic-bezier-curve
         * @param v0 (Vector3) the origin point of the Quadratic Bezier
         * @param v1 (Vector3) the control point
         * @param v2 (Vector3) the end point of the Quadratic Bezier
         * @param nbPoints (integer) the wanted number of points in the curve
         */
        static CreateQuadraticBezier(v0: Vector3, v1: Vector3, v2: Vector3, nbPoints: number): Curve3;
        /**
         * Returns a Curve3 object along a Cubic Bezier curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#cubic-bezier-curve
         * @param v0 (Vector3) the origin point of the Cubic Bezier
         * @param v1 (Vector3) the first control point
         * @param v2 (Vector3) the second control point
         * @param v3 (Vector3) the end point of the Cubic Bezier
         * @param nbPoints (integer) the wanted number of points in the curve
         */
        static CreateCubicBezier(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3, nbPoints: number): Curve3;
        /**
         * Returns a Curve3 object along a Hermite Spline curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#hermite-spline
         * @param p1 (Vector3) the origin point of the Hermite Spline
         * @param t1 (Vector3) the tangent vector at the origin point
         * @param p2 (Vector3) the end point of the Hermite Spline
         * @param t2 (Vector3) the tangent vector at the end point
         * @param nbPoints (integer) the wanted number of points in the curve
         */
        static CreateHermiteSpline(p1: Vector3, t1: Vector3, p2: Vector3, t2: Vector3, nbPoints: number): Curve3;
        /**
         * Returns a Curve3 object along a CatmullRom Spline curve :
         * @param points (array of Vector3) the points the spline must pass through. At least, four points required
         * @param nbPoints (integer) the wanted number of points between each curve control points
         * @param closed (boolean) optional with default false, when true forms a closed loop from the points
         */
        static CreateCatmullRomSpline(points: Vector3[], nbPoints: number, closed?: boolean): Curve3;
        /**
         * A Curve3 object is a logical object, so not a mesh, to handle curves in the 3D geometric space.
         * A Curve3 is designed from a series of successive Vector3.
         * Tuto : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#curve3-object
         */
        constructor(points: Vector3[]);
        /**
         * Returns the Curve3 stored array of successive Vector3
         */
        getPoints(): Vector3[];
        /**
         * Returns the computed length (float) of the curve.
         */
        length(): number;
        /**
         * Returns a new instance of Curve3 object : var curve = curveA.continue(curveB);
         * This new Curve3 is built by translating and sticking the curveB at the end of the curveA.
         * curveA and curveB keep unchanged.
         */
        continue(curve: Curve3): Curve3;
        private _computeLength;
    }
    class PositionNormalVertex {
        position: Vector3;
        normal: Vector3;
        constructor(position?: Vector3, normal?: Vector3);
        clone(): PositionNormalVertex;
    }
    class PositionNormalTextureVertex {
        position: Vector3;
        normal: Vector3;
        uv: Vector2;
        constructor(position?: Vector3, normal?: Vector3, uv?: Vector2);
        clone(): PositionNormalTextureVertex;
    }
    class Tmp {
        static Color3: Color3[];
        static Color4: Color4[];
        static Vector2: Vector2[];
        static Vector3: Vector3[];
        static Vector4: Vector4[];
        static Quaternion: Quaternion[];
        static Matrix: Matrix[];
    }
}
