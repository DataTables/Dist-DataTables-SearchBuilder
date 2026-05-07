import { Dom, ColumnSelector, Context, Api, DataTable } from 'datatables.net';
export { DataTable as default } from 'datatables.net';

interface IClassses {
    add: string;
    button: string;
    clearGroup: string;
    greyscale: string;
    group: string;
    inputButton: string;
    logic: string;
    logicContainer: string;
    search: string;
}
interface IDom$2 {
    add: Dom;
    clear: Dom;
    container: Dom;
    logic: Dom;
    logicContainer: Dom;
    search: Dom;
}
interface IS$2 {
    criteria: ISCriteria[];
    depth: number;
    dt: any;
    index: number;
    isChild: boolean;
    logic: string;
    opts: IDefaults;
    preventRedraw: boolean;
    serverData: {
        [keys: string]: IServerData;
    };
    toDrop: Criteria;
    topGroup: Dom;
}
interface ICriteriaDetails {
    condition?: string;
    data?: string;
    logic?: string;
    value?: string[];
}
interface ISCriteria {
    criteria: Group | Criteria;
    index: number;
    logic?: string;
}
interface IDetails$2 {
    criteria?: ICriteriaDetails[];
    index?: number;
    logic?: string;
}
/**
 * The Group class is used within SearchBuilder to represent a group of criteria
 */
declare class Group {
    static classes: IClassses;
    static defaults: IDefaults;
    classes: IClassses;
    dom: IDom$2;
    c: IDefaults;
    s: IS$2;
    constructor(table: any, opts: IDefaults, topGroup: Dom, index?: number, isChild?: boolean, depth?: number, serverData?: any);
    /**
     * Destroys the groups buttons, clears the internal criteria and removes it from the dom
     */
    destroy(): void;
    /**
     * Gets the details required to rebuild the group
     */
    getDetails(deFormatDates?: boolean): IDetails$2 | {};
    /**
     * Getter for the node for the container of the group
     *
     * @returns Node for the container of the group
     */
    getNode(): Dom;
    /**
     * Rebuilds the group based upon the details passed in
     *
     * @param loadedDetails the details required to rebuild the group
     */
    rebuild(loadedDetails: IDetails$2 | IDetails): void;
    /**
     * Redraws the Contents of the searchBuilder Groups and Criteria
     */
    redrawContents(): void;
    /**
     * Resizes the logic button only rather than the entire dom.
     */
    redrawLogic(): void;
    /**
     * Search method, checking the row data against the criteria in the group
     *
     * @param rowData The row data to be compared
     * @returns boolean The result of the search
     */
    search(rowData: any[], rowIdx: number): boolean;
    /**
     * Locates the groups logic button to the correct location on the page
     */
    setupLogic(): void;
    /**
     * Sets listeners on the groups elements
     */
    setListeners(): void;
    /**
     * Adds a criteria to the group
     *
     * @param crit Instance of Criteria to be added to the group
     */
    addCriteria(crit?: Criteria): void;
    /**
     * Checks the group to see if it has any filled criteria
     */
    checkFilled(): boolean;
    /**
     * Gets the count for the number of criteria in this group and any sub groups
     */
    count(): number;
    /**
     * Rebuilds a sub group that previously existed
     *
     * @param loadedGroup The details of a group within this group
     */
    private _addPrevGroup;
    /**
     * Rebuilds a criteria of this group that previously existed
     *
     * @param loadedCriteria The details of a criteria within the group
     */
    private _addPrevCriteria;
    /**
     * Checks And the criteria using AND logic
     *
     * @param rowData The row data to be checked against the search criteria
     * @returns boolean The result of the AND search
     */
    private _andSearch;
    /**
     * Checks And the criteria using OR logic
     *
     * @param rowData The row data to be checked against the search criteria
     * @returns boolean The result of the OR search
     */
    private _orSearch;
    /**
     * Removes a criteria from the group
     *
     * @param criteria The criteria instance to be removed
     */
    private _removeCriteria;
    /**
     * Sets the listeners in group for a criteria
     *
     * @param criteria The criteria for the listeners to be set on
     */
    private _setCriteriaListeners;
    /**
     * Set's the listeners for the group clear button
     */
    private _setClearListener;
    /**
     * Sets listeners for sub groups of this group
     *
     * @param group The sub group that the listeners are to be set on
     */
    private _setGroupListeners;
    /**
     * Sets up the Group instance, setting listeners and appending elements
     */
    private _setup;
    /**
     * Sets the listener for the logic button
     */
    private _setLogicListener;
    /**
     * Toggles the logic for the group
     */
    private _toggleLogic;
}

interface IDetails$1 {
    criteria: Group[];
    logic: string;
}
interface IClasses$1 {
    button: string;
    clearAll: string;
    container: string;
    inputButton: string;
    title: string;
    titleRow: string;
}
interface IDefaults {
    columns: ColumnSelector;
    conditions: {
        [keys: string]: {
            [keys: string]: ICondition;
        };
    };
    depthLimit: false | number;
    enterSearch: boolean;
    filterChanged: (count: number, text: string) => void;
    greyscale: boolean;
    i18n: II18n;
    liveSearch: boolean;
    logic: string;
    orthogonal: IOrthogonal;
    preDefined: boolean | IDetails$1;
}
interface IDom$1 {
    clearAll: Dom;
    container: Dom;
    title: Dom;
    titleRow: Dom;
    topGroup: Dom;
}
interface II18n {
    add: string;
    button: {
        0: string;
        _: string;
    };
    clearAll: string;
    condition: string;
    conditions?: {
        [s: string]: {
            [t: string]: string;
        };
    };
    data: string;
    delete: string;
    deleteTitle: string;
    left: string;
    leftTitle: string;
    logicAnd: string;
    logicOr: string;
    right: string;
    rightTitle: string;
    search: string;
    title: {
        0: string;
        _: string;
    };
    value: string;
    valueJoiner: string;
}
interface IServerData {
    label: any;
    value: any;
}
interface IS$1 {
    dt: any;
    opts: IDefaults;
    search: (settings: Context, searchData: any[], dataIndex: number, origData: any) => boolean;
    serverData: {
        [keys: string]: IServerData[];
    };
    topGroup: Group;
}
/**
 * SearchBuilder class for DataTables.
 * Allows for complex search queries to be constructed and implemented on a DataTable
 */
declare class SearchBuilder {
    static version: string;
    static classes: IClasses$1;
    static defaults: IDefaults;
    classes: IClasses$1;
    dom: IDom$1;
    c: IDefaults;
    s: IS$1;
    constructor(builderSettings: any, opts: IDefaults);
    /**
     * Gets the details required to rebuild the SearchBuilder as it currently is
     */
    getDetails(deFormatDates?: boolean): IDetails$1 | {};
    /**
     * Getter for the node of the container for the searchBuilder
     *
     * @returns Dom the node of the container
     */
    getNode(): Dom;
    /**
     * Rebuilds the SearchBuilder to a state that is provided
     *
     * @param details The details required to perform a rebuild
     */
    rebuild(details: any, redraw?: boolean): SearchBuilder;
    /**
     * Applies the defaults to preDefined criteria
     *
     * @param preDef the array of criteria to be processed.
     */
    private _applyPreDefDefaults;
    /**
     * Set's up the SearchBuilder
     */
    private _setUp;
    private _collapseArray;
    /**
     * Updates the title of the SearchBuilder
     *
     * @param count the number of filters in the SearchBuilder
     */
    private _updateTitle;
    /**
     * Builds all of the dom elements together
     */
    private _build;
    /**
     * Checks if the clearAll button should be added or not
     */
    private _checkClear;
    /**
     * Update the count in the title/button
     *
     * @param count Number of filters applied
     */
    private _filterChanged;
    /**
     * Set the listener for the clear button
     */
    private _setClearListener;
    /**
     * Set the listener for the Redraw event
     */
    private _setRedrawListener;
    /**
     * Sets listeners to check whether clearAll should be added or removed
     */
    private _setEmptyListener;
}

interface IClasses {
    button: string;
    buttonContainer: string;
    condition: string;
    container: string;
    data: string;
    delete: string;
    dropDown: string;
    greyscale: string;
    input: string;
    inputCont: string;
    italic: string;
    joiner: string;
    left: string;
    notItalic: string;
    option: string;
    right: string;
    select: string;
    value: string;
    vertical: string;
}
interface ICondition {
    conditionName: string | ((dt: any, i18n: any) => string);
    init: (that?: Criteria, fn?: (thatAgain: Criteria, el: Dom) => void, preDefined?: string[]) => Dom | Array<Dom> | void;
    inputValue: (el: Dom[], that: Criteria) => string[];
    isInputValid: (val: Array<Dom>, that: Criteria) => boolean;
    search: (value: string | string[], comparison: string[], that: Criteria) => boolean;
}
interface IOrthogonal {
    display: string;
    search: string;
}
interface IDom {
    buttons: Dom;
    condition: Dom;
    conditionTitle: Dom;
    container: Dom;
    data: Dom;
    dataTitle: Dom;
    defaultValue: Dom;
    delete: Dom;
    inputCont: Dom;
    left: Dom;
    right: Dom;
    value: Array<Dom>;
    valueTitle: Dom;
}
interface IS {
    condition: string;
    conditions: {
        [keys: string]: ICondition;
    };
    data: string;
    dataIdx: number;
    dataPoints: IDataOpt[];
    dateFormat: string | boolean;
    depth: number;
    dt: Api;
    filled: boolean;
    index: number;
    liveSearch: boolean;
    origData: string;
    preventRedraw: boolean;
    serverData: {
        [keys: string]: IServerData[];
    };
    topGroup: Dom;
    type: string;
    value: string[];
}
interface IDataOpt {
    index: number;
    origData: string;
    text: string;
}
interface IDetails {
    condition?: string;
    criteria?: Criteria;
    data?: string;
    index?: number;
    logic?: string;
    origData?: string;
    type?: string;
    value?: string[];
}
/**
 * The Criteria class is used within SearchBuilder to represent a search criteria
 */
declare class Criteria {
    static classes: IClasses;
    classes: IClasses;
    dom: IDom;
    c: IDefaults;
    s: IS;
    constructor(table: any, opts: IDefaults, topGroup: Dom, index?: number, depth?: number, serverData?: any, liveSearch?: boolean);
    /**
     * Default initialisation function for select conditions
     */
    private static initSelect;
    /**
     * Default initialisation function for select conditions
     */
    private static initSelectSSP;
    /**
     * Default initialisation function for select array conditions
     *
     * This exists because there needs to be different select functionality for contains/without and equals/not
     */
    private static initSelectArray;
    /**
     * Default initialisation function for input conditions
     */
    private static initInput;
    /**
     * Default initialisation function for conditions requiring 2 inputs
     */
    private static init2Input;
    /**
     * Default initialisation function for date conditions
     */
    private static initDate;
    private static initNoValue;
    private static init2Date;
    /**
     * Default function for select elements to validate condition
     */
    private static isInputValidSelect;
    /**
     * Default function for input and date elements to validate condition
     */
    private static isInputValidInput;
    /**
     * Default function for getting select conditions
     */
    private static inputValueSelect;
    /**
     * Default function for getting input conditions
     */
    private static inputValueInput;
    /**
     * Function that is run on each element as a call back when a search should be triggered
     */
    private static updateListener;
    /**
     * Redraw the DataTable with the current search parameters
     */
    private doSearch;
    /**
     * Parses formatted numbers down to a form where they can be compared.
     * Note that this does not account for different decimal characters. Use
     * parseNumber instead on the instance.
     *
     * @param val the value to convert
     * @returns the converted value
     */
    private static parseNumFmt;
    static dateConditions: {
        [keys: string]: ICondition;
    };
    static momentDateConditions: {
        [keys: string]: ICondition;
    };
    static luxonDateConditions: {
        [keys: string]: ICondition;
    };
    static numConditions: {
        [keys: string]: ICondition;
    };
    static numFmtConditions: {
        [keys: string]: ICondition;
    };
    static stringConditions: {
        [keys: string]: ICondition;
    };
    static arrayConditions: {
        [keys: string]: ICondition;
    };
    private static defaults;
    /**
     * Adds the left button to the criteria
     */
    updateArrows(hasSiblings?: boolean): void;
    /**
     * Destroys the criteria, removing listeners and container from the dom
     */
    destroy(): void;
    /**
     * Passes in the data for the row and compares it against this single criteria
     *
     * @param rowData The data for the row to be compared
     * @returns boolean Whether the criteria has passed
     */
    search(rowData: any[], rowIdx: number): boolean;
    /**
     * Determine if the DataTable has return for search enabled
     *
     * @returns true if enabled
     */
    isReturnSearch(): boolean;
    /**
     * Gets the details required to rebuild the criteria
     */
    getDetails(deFormatDates?: boolean): IDetails;
    /**
     * Getter for the node for the container of the criteria
     *
     * @returns Dom the node for the container
     */
    getNode(): Dom;
    /**
     * Parses formatted numbers down to a form where they can be compared
     *
     * @param val the value to convert
     * @returns the converted value
     */
    parseNumber(val: any): number;
    /**
     * Populates the criteria data, condition and value(s) as far as has been selected
     */
    populate(): void;
    /**
     * Rebuilds the criteria based upon the details passed in
     *
     * @param loadedCriteria the details required to rebuild the criteria
     */
    rebuild(loadedCriteria: IDetails): void;
    /**
     * Sets the listeners for the criteria
     */
    setListeners(): void;
    setupButtons(): void;
    /**
     * Builds the elements of the dom together
     */
    private _buildCriteria;
    /**
     * Clears the condition select element
     */
    private _clearCondition;
    /**
     * Clears the value elements
     */
    private _clearValue;
    /**
     * Gets the options for the column
     *
     * @returns {object} The options for the column
     */
    private _getOptions;
    /**
     * Populates the condition dropdown
     */
    private _populateCondition;
    /**
     * Populates the data / column select element
     */
    private _populateData;
    /**
     * Populates the Value select element
     *
     * @param loadedCriteria optional, used to reload criteria from predefined filters
     */
    private _populateValue;
    /**
     * Provides throttling capabilities to SearchBuilder without having to use dt's _fnThrottle function
     * This is because that function is not quite suitable for our needs as it runs initially rather than waiting
     *
     * @param args arguments supplied to the throttle function
     * @returns Function that is to be run that implements the throttling
     */
    private _throttle;
}

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
declare module 'datatables.net' {
    interface Config {
        /**
         * SearchBuilder extension options
         */
        searchBuilder?: boolean | string[] | ConfigSearchBuilder | ConfigSearchBuilder[];
    }
    interface Defaults {
        searchBuilder?: ConfigSearchBuilder;
    }
    interface ConfigLanguage {
        /**
         * SearchBuilder language options
         */
        searchBuilder?: ConfigSearchBuilderLanguage;
    }
    interface Context {
        _searchBuilder: SearchBuilder;
    }
    interface Ext {
        searchBuilder: {
            conditions: Record<string, ICondition>;
        };
    }
    interface ColumnContext {
        searchBuilder?: {
            /** Set a default condition for this column */
            defaultCondition?: number | string;
            /** Set values of orthogonal data for rendering functions */
            orthogonal?: {
                [key: string]: string;
            };
        };
        /** Set a custom title for a column in SearchBuilder */
        searchBuilderTitle?: string;
        /** Set the SearchBuilder type to use for a column */
        searchBuilderType?: string;
    }
    interface Feature {
        searchBuilder?: string[] | ConfigSearchBuilder | ConfigSearchBuilder[];
    }
    interface Api<T> {
        /**
         * SearchBuilder methods container
         *
         * @returns Api for chaining with the additional SearchBuilder methods
         */
        searchBuilder: ApiSearchBuilder<T>;
    }
    interface DataTablesStatic {
        /**
         * SearchBuilder class
         */
        SearchBuilder: typeof SearchBuilder;
        Group: typeof Group;
        Criteria: typeof Criteria;
    }
}
interface ConfigSearchBuilder extends Partial<IDefaults> {
}
interface ConfigSearchBuilderLanguage extends DeepPartial<II18n> {
}
interface ApiSearchBuilder<T> extends Api<T> {
    /**
     * Returns the node of the SearchBuilder Container
     */
    container(): Dom;
    /**
     * Gets the details of the current SearchBuilder setup
     */
    getDetails(): IDetails$1;
    /**
     * Rebuild the search to a given state.
     *
     * @param state Object of the same structure that is returned from
     *   searchBuilder.getDetails(). This contains all of the details needed to
     *   rebuild the state.
     * @returns self for chaining
     */
    rebuild(state: IDetails$1): Api<T>;
}
