// TypeScript definitions for OmniPlan 4.9.2 (229.2.1) on macOS 15.3.1
// Generated on 2025-02-23 21:23:44 +0000

// To use these definitions, save this file as `OmniPlan.d.ts`
// and create a `tsconfig.json` file with compiler settings which indicate
// an appropriate set of implicitly defined TypeScript libraries:
//
// {
//     "compilerOptions": {
//         "lib": ["es7"]
//     }
// }


// Alert

declare class Alert {
    constructor (title: string, message: string);
    show(callback: (option: number) => void | null): Promise<number>;
    addOption(string: string): void;
}

// Application

declare class Application {
    openDocument(from: Document | null, url: URL, completed: (documentOrError: Document | Error, alreadyOpen: boolean) => void): void;
    readonly buildVersion: Version;
    readonly commandKeyDown: boolean;
    readonly controlKeyDown: boolean;
    readonly name: string;
    readonly optionKeyDown: boolean;
    readonly platformName: string;
    readonly shiftKeyDown: boolean;
    readonly userVersion: Version;
    readonly version: string;
}

// Assignment

declare class Assignment {
    remove(): void;
    readonly isLocal: boolean;
    readonly resource: Resource;
    readonly specificAssignments: Array<Assignment>;
    readonly task: Task;
    readonly totalCost: Decimal;
    readonly totalDuration: number;
    readonly totalEffort: number;
    unitsAssigned: number;
}

// Audio

declare namespace Audio {
    function playAlert(alert: Audio.Alert | null, completed: () => void | null): void;
}

declare class Audio {
}

// Audio.Alert

declare namespace Audio {
    class Alert {
        constructor (url: URL);
    }
}

// Calendar

declare namespace Calendar {
    const buddhist: Calendar;
    const chinese: Calendar;
    const coptic: Calendar;
    const current: Calendar;
    const ethiopicAmeteAlem: Calendar;
    const ethiopicAmeteMihret: Calendar;
    const gregorian: Calendar;
    const hebrew: Calendar;
    const indian: Calendar;
    const islamic: Calendar;
    const islamicCivil: Calendar;
    const islamicTabular: Calendar;
    const islamicUmmAlQura: Calendar;
    const iso8601: Calendar;
    const japanese: Calendar;
    const persian: Calendar;
    const republicOfChina: Calendar;
}

declare class Calendar {
    dateByAddingDateComponents(date: Date, components: DateComponents): Date | null;
    dateFromDateComponents(components: DateComponents): Date | null;
    dateComponentsFromDate(date: Date): DateComponents;
    dateComponentsBetweenDates(start: Date, end: Date): DateComponents;
    startOfDay(date: Date): Date;
    readonly identifier: string;
    readonly locale: Locale | null;
    readonly timeZone: TimeZone;
}

// CalendarEvent

declare class CalendarEvent {
    readonly end: Date;
    readonly start: Date;
    readonly title: string | null;
}

// Color

declare namespace Color {
    function RGB(r: number, g: number, b: number, a: number | null): Color;
    function HSB(h: number, s: number, b: number, a: number | null): Color;
    function White(w: number, a: number | null): Color;
    const black: Color;
    const blue: Color;
    const brown: Color;
    const clear: Color;
    const cyan: Color;
    const darkGray: Color;
    const gray: Color;
    const green: Color;
    const lightGray: Color;
    const magenta: Color;
    const orange: Color;
    const purple: Color;
    const red: Color;
    const white: Color;
    const yellow: Color;
}

declare class Color {
    blend(otherColor: Color, fraction: number): Color | null;
    readonly alpha: number;
    readonly blue: number;
    readonly brightness: number;
    readonly colorSpace: ColorSpace;
    readonly green: number;
    readonly hue: number;
    readonly red: number;
    readonly saturation: number;
    readonly white: number;
}

// ColorSpace

declare namespace ColorSpace {
    const CMYK: ColorSpace;
    const HSB: ColorSpace;
    const Named: ColorSpace;
    const Pattern: ColorSpace;
    const RGB: ColorSpace;
    const White: ColorSpace;
    const all: Array<ColorSpace>;
}

declare class ColorSpace {
}

// Console

declare class Console {
    log(message: Object, additional: Array<Object | null>): void;
    error(message: Object, additional: Array<Object | null>): void;
    info(message: Object, additional: Array<Object | null>): void;
    warn(message: Object, additional: Array<Object | null>): void;
    clear(): void;
}

// Credentials

declare class Credentials {
    constructor ();
    read(service: string): object | null;
    write(service: string, username: string, password: string): void;
    remove(service: string): void;
    readBookmark(service: string): URL.Bookmark | null;
    writeBookmark(service: string, bookmark: URL.Bookmark): void;
}

// Crypto

declare namespace Crypto {
    function randomData(length: number): Data;
}

declare class Crypto {
}

// Crypto.SHA256

declare namespace Crypto {
    class SHA256 {
        constructor ();
        update(data: Data): void;
        finalize(): Data;
    }
}

// Crypto.SHA384

declare namespace Crypto {
    class SHA384 {
        constructor ();
        update(data: Data): void;
        finalize(): Data;
    }
}

// Crypto.SHA512

declare namespace Crypto {
    class SHA512 {
        constructor ();
        update(data: Data): void;
        finalize(): Data;
    }
}

// Data

declare namespace Data {
    function fromString(string: string, encoding: StringEncoding | null): Data;
    function fromBase64(string: string): Data;
}

declare class Data {
    toString(encoding: StringEncoding | null): string;
    toBase64(): string;
    readonly length: number;
    readonly toObject: Object | null;
}

// DateComponents

declare class DateComponents {
    constructor ();
    readonly date: Date | null;
    day: number | null;
    era: number | null;
    hour: number | null;
    minute: number | null;
    month: number | null;
    nanosecond: number | null;
    second: number | null;
    timeZone: TimeZone | null;
    year: number | null;
}

// Decimal

declare namespace Decimal {
    function fromString(string: string): Decimal;
    const maximum: Decimal;
    const minimum: Decimal;
    const notANumber: Decimal;
    const one: Decimal;
    const zero: Decimal;
}

declare class Decimal {
    toString(): string;
    add(number: Decimal): Decimal;
    subtract(number: Decimal): Decimal;
    multiply(number: Decimal): Decimal;
    divide(number: Decimal): Decimal;
    compare(number: Decimal): number;
    equals(number: Decimal): boolean;
}

// Dependency

declare class Dependency {
    remove(): void;
    readonly dependent: Task;
    dependentAlignedToEnd: boolean;
    kind: DependencyKind;
    leadTimeDuration: Duration | null;
    leadTimePercentage: number | null;
    readonly prerequisite: Task;
    prerequisiteAlignedToEnd: boolean;
}

// DependencyKind

declare namespace DependencyKind {
    const FinishFinish: DependencyKind;
    const FinishStart: DependencyKind;
    const Invalid: DependencyKind;
    const StartFinish: DependencyKind;
    const StartStart: DependencyKind;
    const all: Array<DependencyKind>;
}

declare class DependencyKind {
}

// Device

declare namespace Device {
    const current: Device;
}

declare class Device {
    readonly iOS: boolean;
    readonly iPad: boolean;
    readonly mac: boolean;
    readonly operatingSystemVersion: Version;
    readonly type: DeviceType | null;
    readonly visionPro: boolean;
}

// DeviceType

declare namespace DeviceType {
    const all: Array<DeviceType>;
    const iPad: DeviceType;
    const iPhone: DeviceType;
    const mac: DeviceType;
    const visionPro: DeviceType;
}

declare class DeviceType {
}

// Document

declare namespace Document {
    function makeNew(resultFunction: (document: Document | Error) => void | null): Promise<Document>;
    function makeNewAndShow(resultFunction: (document: Document | Error) => void | null): Promise<Document>;
}

declare class Document {
    close(didCancel: (document: Document) => void | null): void;
    save(): void;
    fileWrapper(type: string | null): FileWrapper;
    makeFileWrapper(baseName: string, type: string | null): Promise<FileWrapper>;
    undo(): void;
    redo(): void;
    show(completed: () => void | null): void;
    readonly canRedo: boolean;
    readonly canUndo: boolean;
    readonly fileType: string | null;
    readonly name: string | null;
    readonly writableTypes: Array<string>;
}

// PlanDocument

declare class PlanDocument extends Document {
    setImageExportSettings(view: ImageExportView, portion: ImageExportPortion): void;
    readonly project: Project;
    readonly windows: Array<Window>;
}

// Duration

declare namespace Duration {
    function workSeconds(s: number): Duration;
    function workHours(h: number): Duration;
    function elapsedHourMinSec(h: number, m: number, s: number): Duration;
    function elapsedDays(d: number): Duration;
    function elapsedYearMonthDay(y: number, m: number, d: number): Duration;
}

declare class Duration {
    readonly elapsed: boolean;
    readonly elapsedDays: number;
    readonly elapsedHours: number;
    readonly elapsedMinutes: number;
    readonly elapsedMonths: number;
    readonly elapsedSeconds: number;
    readonly elapsedWeeks: number;
    readonly elapsedYears: number;
    readonly workSeconds: number;
}

// Email

declare class Email {
    constructor ();
    generate(): void;
    blindCarbonCopy: string | Array<string> | null;
    body: string | null;
    carbonCopy: string | Array<string> | null;
    fileWrappers: Array<FileWrapper>;
    receiver: string | Array<string> | null;
    subject: string | null;
}

// FilePicker

declare class FilePicker {
    constructor ();
    show(): Promise<Array<URL>>;
    folders: boolean;
    message: string;
    multiple: boolean;
    types: Array<TypeIdentifier> | null;
}

// FileSaver

declare class FileSaver {
    constructor ();
    show(fileWrapper: FileWrapper): Promise<URL>;
    message: string;
    nameLabel: string;
    prompt: string;
    types: Array<TypeIdentifier> | null;
}

// FileWrapper

declare namespace FileWrapper {
    function withContents(name: string | null, contents: Data): FileWrapper;
    function withChildren(name: string | null, children: Array<FileWrapper>): FileWrapper;
    function fromURL(url: URL, options: Array<FileWrapper.ReadingOptions> | null): FileWrapper;
}

declare class FileWrapper {
    childNamed(name: string): FileWrapper | null;
    filenameForChild(child: FileWrapper): string | null;
    write(url: URL, options: Array<FileWrapper.WritingOptions> | null, originalContentsURL: URL | null): void;
    readonly children: Array<FileWrapper>;
    readonly contents: Data | null;
    readonly destination: URL | null;
    filename: string | null;
    preferredFilename: string | null;
    readonly type: FileWrapper.Type;
}

// FileWrapper.ReadingOptions

declare namespace FileWrapper.ReadingOptions {
    const Immediate: FileWrapper.ReadingOptions;
    const WihtoutMapping: FileWrapper.ReadingOptions;
    const all: Array<FileWrapper.ReadingOptions>;
}

declare namespace FileWrapper {
    class ReadingOptions {
    }
}

// FileWrapper.Type

declare namespace FileWrapper.Type {
    const Directory: FileWrapper.Type;
    const File: FileWrapper.Type;
    const Link: FileWrapper.Type;
    const all: Array<FileWrapper.Type>;
}

declare namespace FileWrapper {
    class Type {
    }
}

// FileWrapper.WritingOptions

declare namespace FileWrapper.WritingOptions {
    const Atomic: FileWrapper.WritingOptions;
    const UpdateNames: FileWrapper.WritingOptions;
    const all: Array<FileWrapper.WritingOptions>;
}

declare namespace FileWrapper {
    class WritingOptions {
    }
}

// Form

declare class Form {
    constructor ();
    addField(field: Form.Field, index: number | null): void;
    removeField(field: Form.Field): void;
    show(title: string, confirmTitle: string): Promise<Form>;
    readonly fields: Array<Form.Field>;
    validate: (Form: Form) => boolean | null;
    readonly values: Object;
}

// Form.Field

declare namespace Form {
    class Field {
        readonly displayName: string | null;
        readonly key: string;
    }
}

// Form.Field.Checkbox

declare namespace Form.Field {
    class Checkbox extends Form.Field {
        constructor (key: string, displayName: string | null, value: boolean | null);
    }
}

// Form.Field.Date

declare namespace Form.Field {
    class Date extends Form.Field {
        constructor (key: string, displayName: string | null, value: Date | null, formatter: Formatter.Date | null);
    }
}

// Form.Field.MultipleOptions

declare namespace Form.Field {
    class MultipleOptions extends Form.Field {
        constructor (key: string, displayName: string | null, options: Array<Object>, names: Array<string> | null, selected: Array<Object>);
    }
}

// Form.Field.Option

declare namespace Form.Field {
    class Option extends Form.Field {
        constructor (key: string, displayName: string | null, options: Array<Object>, names: Array<string> | null, selected: Object | null, nullOptionTitle: string | null);
        allowsNull: boolean;
        nullOptionTitle: string | null;
    }
}

// Form.Field.Password

declare namespace Form.Field {
    class Password extends Form.Field {
        constructor (key: string, displayName: string | null, value: string | null);
    }
}

// Form.Field.String

declare namespace Form.Field {
    class String extends Form.Field {
        constructor (key: string, displayName: string | null, value: Object | null, formatter: Formatter | null);
    }
}

// Formatter

declare class Formatter {
}

// Formatter.Date

declare namespace Formatter.Date {
    function withStyle(dateStyle: Formatter.Date.Style, timeStyle: Formatter.Date.Style | null): Formatter.Date;
    function withFormat(format: string): Formatter.Date;
    const iso8601: Formatter.Date;
}

declare namespace Formatter {
    class Date extends Formatter {
        stringFromDate(date: Date): string;
        dateFromString(string: string): Date | null;
        calendar: Calendar;
        readonly dateFormat: string;
        locale: Locale;
        timeZone: TimeZone;
    }
}

// Formatter.Decimal

declare namespace Formatter.Decimal {
    function currency(code: string | null): Formatter.Decimal;
    const currencyCodes: Array<string>;
    const custom: Formatter.Decimal;
    const decimal: Formatter.Decimal;
    const percent: Formatter.Decimal;
    const percentWithDecimal: Formatter.Decimal;
    const plain: Formatter.Decimal;
    const thousandsAndDecimal: Formatter.Decimal;
}

declare namespace Formatter {
    class Decimal extends Formatter {
        stringFromDecimal(number: Decimal): string | null;
        decimalFromString(string: string): Decimal | null;
        decimalSeparator: string;
        negativeFormat: string;
        positiveFormat: string;
        thousandsSeparator: string | null;
        zeroSymbol: string | null;
    }
}

// Formatter.Duration

declare namespace Formatter {
    class Duration extends Formatter {
        constructor ();
        stringFromDecimal(number: Decimal): string | null;
        decimalFromString(string: string): Decimal | null;
        hoursPerDay: number;
        hoursPerWeek: number;
        useVerboseFormat: boolean;
    }
}

// Formatter.Date.Style

declare namespace Formatter.Date.Style {
    const Full: Formatter.Date.Style;
    const Long: Formatter.Date.Style;
    const Medium: Formatter.Date.Style;
    const Short: Formatter.Date.Style;
    const all: Array<Formatter.Date.Style>;
}

declare namespace Formatter.Date {
    class Style {
    }
}

// Image

declare namespace Image {
    function symbolNamed(name: string): Image | null;
}

declare class Image {
}

// ImageExportPortion

declare namespace ImageExportPortion {
    const all: Array<ImageExportPortion>;
    const bothViews: ImageExportPortion;
    const outlineOnly: ImageExportPortion;
    const visualViewOnly: ImageExportPortion;
}

declare class ImageExportPortion {
}

// ImageExportView

declare namespace ImageExportView {
    const all: Array<ImageExportView>;
    const networkDiagram: ImageExportView;
    const outlineView: ImageExportView;
    const resourceView: ImageExportView;
    const taskView: ImageExportView;
}

declare class ImageExportView {
}

// Locale

declare namespace Locale {
    const identifiers: Array<string>;
}

declare class Locale {
    constructor (identifier: string);
    readonly calendar: Calendar;
    readonly currencyCode: string | null;
    readonly identifier: string;
}

// MenuItem

declare class MenuItem {
    checked: boolean;
    image: Image | null;
    label: string;
}

// Notification

declare class Notification {
    constructor (title: string);
    show(): Promise<Notification>;
    subtitle: string | null;
    title: string;
}

// Pasteboard

declare namespace Pasteboard {
    function makeUnique(): Pasteboard;
    const general: Pasteboard;
}

declare class Pasteboard {
    availableType(types: Array<TypeIdentifier>): TypeIdentifier | null;
    addItems(items: Array<Pasteboard.Item>): void;
    clear(): void;
    dataForType(type: TypeIdentifier): Data | null;
    setDataForType(data: Data, type: TypeIdentifier): void;
    stringForType(type: TypeIdentifier): string | null;
    setStringForType(string: string, type: TypeIdentifier): void;
    URL: URL | null;
    URLs: Array<URL> | null;
    color: Color | null;
    colors: Array<Color> | null;
    readonly hasColors: boolean;
    readonly hasImages: boolean;
    readonly hasStrings: boolean;
    readonly hasURLs: boolean;
    image: Image | null;
    images: Array<Image> | null;
    items: Array<Pasteboard.Item>;
    string: string | null;
    strings: Array<string> | null;
    readonly types: Array<TypeIdentifier>;
}

// Pasteboard.Item

declare namespace Pasteboard {
    class Item {
        constructor ();
        dataForType(type: TypeIdentifier): Data | null;
        setDataForType(data: Data, type: TypeIdentifier): void;
        stringForType(type: TypeIdentifier): string | null;
        setStringForType(string: string, type: TypeIdentifier): void;
        readonly types: Array<TypeIdentifier>;
    }
}

// PlugIn

declare namespace PlugIn {
    function find(identifier: string, minimumVersion: Version | null): PlugIn | null;
    const all: Array<PlugIn>;
}

declare class PlugIn {
    library(identifier: string): PlugIn.Library | null;
    action(identifier: string): PlugIn.Action | null;
    handler(identifier: string): PlugIn.Handler | null;
    resourceNamed(name: string): URL | null;
    imageNamed(name: string): Image | null;
    localizedResourceNamed(filename: string): FileWrapper | null;
    readonly URL: URL | null;
    readonly actions: Array<PlugIn.Action>;
    readonly author: string;
    readonly description: string;
    readonly displayName: string;
    readonly handlers: Array<PlugIn.Handler>;
    readonly identifier: string;
    readonly libraries: Array<PlugIn.Library>;
    readonly version: Version;
}

// PlugIn.Action

declare namespace PlugIn {
    class Action {
        constructor (perform: Function);
        readonly description: string;
        readonly label: string;
        readonly longLabel: string;
        readonly mediumLabel: string;
        readonly name: string;
        readonly paletteLabel: string;
        readonly perform: Function;
        readonly plugIn: PlugIn;
        readonly shortLabel: string;
        validate: Function | null;
    }
}

// PlugIn.Handler

declare namespace PlugIn {
    class Handler {
        constructor (invoke: Function);
        readonly invoke: Function;
        readonly name: string;
        readonly plugIn: PlugIn;
        willAttach: Function | null;
        willDetach: Function | null;
    }
}

// PlugIn.Handler.Registration

declare namespace PlugIn.Handler {
    class Registration {
        remove(): void;
    }
}

// PlugIn.Library

declare namespace PlugIn {
    class Library {
        constructor (version: Version);
        readonly name: string;
        readonly plugIn: PlugIn;
        readonly version: Version;
    }
}

// Preferences

declare class Preferences {
    constructor (identifier: string | null);
    read(key: string): Object | null;
    readBoolean(key: string): boolean;
    readString(key: string): string | null;
    readNumber(key: string): number;
    readDate(key: string): Date | null;
    readData(key: string): Data | null;
    write(key: string, value: boolean | string | number | Date | Data | null): void;
    remove(key: string): void;
    readonly identifier: string;
}

// Project

declare class Project {
    customValue(forKey: string): string | null;
    setCustomValue(forKey: string, to: string): void;
    baselineNamed(name: string): Scenario | null;
    readonly actual: Scenario;
    readonly app: Application;
    readonly baselineNames: Array<string>;
    readonly console: Console;
    readonly document: PlanDocument | null;
    title: string;
}

// Resource

declare class Resource {
    customValue(forKey: string): string | null;
    setCustomValue(forKey: string, to: string): void;
    setCustomData(key: string, value: string | null): void;
    addMember(): Resource;
    descendents(): Array<Resource>;
    remove(): void;
    readonly assignments: Array<Assignment>;
    readonly completedCost: Decimal;
    costPerHour: Decimal;
    costPerUse: Decimal;
    customData: object;
    efficiency: number;
    email: string | null;
    readonly members: Array<Resource>;
    name: string;
    note: string;
    readonly schedule: Schedule;
    readonly totalCost: Decimal;
    readonly totalHours: number;
    type: ResourceType;
    readonly uniqueID: number;
    unitsAvailable: number;
}

// ResourceAssignmentType

declare namespace ResourceAssignmentType {
    const adjustAssignedUnits: ResourceAssignmentType;
    const adjustDuration: ResourceAssignmentType;
    const adjustEffort: ResourceAssignmentType;
    const all: Array<ResourceAssignmentType>;
}

declare class ResourceAssignmentType {
}

// ResourceCalendar

declare class ResourceCalendar {
    readonly events: Array<CalendarEvent>;
    readonly name: string;
    readonly overtime: boolean;
}

// ResourceType

declare namespace ResourceType {
    const all: Array<ResourceType>;
    const equipment: ResourceType;
    const group: ResourceType;
    const material: ResourceType;
    const staff: ResourceType;
}

declare class ResourceType {
}

// Scenario

declare class Scenario {
    taskNamed(name: string): Task | null;
    resourceNamed(name: string): Resource | null;
    readonly completed: number;
    endDate: Date;
    hasFixedEndDate: boolean;
    hasGenericDates: boolean;
    readonly milestones: Array<Task>;
    name: string;
    readonly rootResource: Resource;
    readonly rootTask: Task;
    readonly schedule: Schedule;
    startDate: Date;
    readonly totalCost: Decimal;
}

// Schedule

declare class Schedule {
    endDate(start: Date, duration: Duration): Date;
    startDate(end: Date, duration: Duration): Date;
    durationBetween(start: Date, end: Date): Duration;
    readonly calendars: Array<ResourceCalendar>;
}

// Selection

declare class Selection {
    readonly document: PlanDocument | null;
    readonly project: Project | null;
    readonly resources: Array<Resource>;
    readonly tasks: Array<Task>;
    readonly window: Window | null;
}

// SharePanel

declare class SharePanel {
    constructor (items: Array<URL | string | Image | FileWrapper>);
    addItem(shareItem: URL | string | Image | FileWrapper): void;
    addItems(shareItems: Array<URL | string | Image | FileWrapper>): void;
    removeItem(shareItem: URL | string | Image | FileWrapper): void;
    removeItems(shareItems: Array<URL | string | Image | FileWrapper>): void;
    clearItems(): void;
    show(): void;
    items: Array<URL | string | Image | FileWrapper>;
}

// Speech

declare class Speech {
}

// Speech.Boundary

declare namespace Speech.Boundary {
    const Immediate: Speech.Boundary;
    const Word: Speech.Boundary;
    const all: Array<Speech.Boundary>;
}

declare namespace Speech {
    class Boundary {
    }
}

// Speech.Synthesizer

declare namespace Speech {
    class Synthesizer {
        constructor ();
        speakUtterance(utterance: Speech.Utterance): void;
        stopSpeaking(boundary: Speech.Boundary): boolean;
        pauseSpeaking(boundary: Speech.Boundary): boolean;
        continueSpeaking(): boolean;
        readonly paused: boolean;
        readonly speaking: boolean;
    }
}

// Speech.Utterance

declare namespace Speech.Utterance {
    const defaultSpeechRate: number;
    const maximumSpeechRate: number;
    const minimumSpeechRate: number;
}

declare namespace Speech {
    class Utterance {
        constructor (string: string);
        pitchMultiplier: number;
        postUtteranceDelay: number;
        preUtteranceDelay: number;
        prefersAssistiveTechnologySettings: boolean;
        rate: number;
        readonly string: string | null;
        voice: Speech.Voice | null;
        volume: number;
    }
}

// Speech.Voice

declare namespace Speech.Voice {
    function withLanguage(code: string | null): Speech.Voice | null;
    function withIdentifier(identifier: string): Speech.Voice | null;
    const allVoices: Array<Speech.Voice>;
    const currentLanguageCode: string;
}

declare namespace Speech {
    class Voice {
        readonly gender: Speech.Voice.Gender;
        readonly identifier: string;
        readonly language: string;
        readonly name: string;
    }
}

// Speech.Voice.Gender

declare namespace Speech.Voice.Gender {
    const Female: Speech.Voice.Gender;
    const Male: Speech.Voice.Gender;
    const Unspecified: Speech.Voice.Gender;
    const all: Array<Speech.Voice.Gender>;
}

declare namespace Speech.Voice {
    class Gender {
    }
}

// StringEncoding

declare namespace StringEncoding {
    const ASCII: StringEncoding;
    const ISO2022JP: StringEncoding;
    const ISOLatin1: StringEncoding;
    const ISOLatin2: StringEncoding;
    const JapaneseEUC: StringEncoding;
    const MacOSRoman: StringEncoding;
    const NextStep: StringEncoding;
    const NonLossyASCII: StringEncoding;
    const ShiftJIS: StringEncoding;
    const Symbol: StringEncoding;
    const UTF16: StringEncoding;
    const UTF16BigEndian: StringEncoding;
    const UTF16LittleEndian: StringEncoding;
    const UTF32: StringEncoding;
    const UTF32BigEndian: StringEncoding;
    const UTF32LittleEndian: StringEncoding;
    const UTF8: StringEncoding;
    const Unicode: StringEncoding;
    const WindowsCP1250: StringEncoding;
    const WindowsCP1251: StringEncoding;
    const WindowsCP1252: StringEncoding;
    const WindowsCP1253: StringEncoding;
    const WindowsCP1254: StringEncoding;
    const all: Array<StringEncoding>;
}

declare class StringEncoding {
}

// Task

declare class Task {
    customValue(forKey: string): string | null;
    setCustomValue(forKey: string, to: string): void;
    descendents(): Array<Task>;
    clearResourceLeveledDate(): void;
    setCustomData(key: string, value: string | null): void;
    addPrerequisite(to: Task): Dependency;
    addDependent(to: Task): Dependency;
    addAssignment(to: Resource): Assignment | null;
    addSubtask(): Task;
    split(at: Date, resumingAt: Date): boolean;
    remove(): void;
    readonly absoluteEndLimit: Date;
    readonly absoluteStartLimit: Date;
    readonly assignments: Array<Assignment>;
    readonly assignmentsCost: Decimal;
    readonly currentEndLimit: Date;
    readonly currentStartLimit: Date;
    customData: object;
    readonly dependents: Array<Dependency>;
    duration: Duration | null;
    effort: number;
    effortDone: number;
    effortRemaining: number;
    readonly endDate: Date;
    endNoEarlierThanDate: Date | null;
    endNoLaterThanDate: Date | null;
    expectedEffortEstimate: number;
    readonly freeSlack: number;
    manualEndDate: Date | null;
    manualStartDate: Date | null;
    maxEffortEstimate: number;
    minEffortEstimate: number;
    note: string;
    readonly prerequisites: Array<Dependency>;
    priority: number;
    resourceAssignmentType: ResourceAssignmentType;
    readonly resourceLeveledDate: Date | null;
    readonly resourceLevelingDelay: number;
    readonly startDate: Date;
    startNoEarlierThanDate: Date | null;
    startNoLaterThanDate: Date | null;
    staticCost: Decimal;
    readonly subtasks: Array<Task>;
    title: string;
    readonly totalCost: Decimal;
    readonly totalSlack: number;
    type: TaskType;
    readonly uniqueID: number;
}

// TaskType

declare namespace TaskType {
    const all: Array<TaskType>;
    const group: TaskType;
    const hammock: TaskType;
    const milestone: TaskType;
    const task: TaskType;
}

declare class TaskType {
}

// TimeZone

declare namespace TimeZone {
    const abbreviations: Array<string>;
}

declare class TimeZone {
    constructor (abbreviation: string);
    readonly abbreviation: string | null;
    readonly daylightSavingTime: boolean;
    readonly secondsFromGMT: number;
}

// Timer

declare namespace Timer {
    function once(interval: number, action: (timer: Timer) => void): Timer;
    function repeating(interval: number, action: (timer: Timer) => void): Timer;
}

declare class Timer {
    cancel(): void;
    readonly interval: number;
}

// ToolbarItem

declare class ToolbarItem {
    image: Image | null;
    label: string;
    toolTip: string | null;
}

// TypeIdentifier

declare namespace TypeIdentifier {
    function fromPathExtension(pathExtension: string, isDirectory: boolean): TypeIdentifier;
    const URL: TypeIdentifier;
    const binaryPropertyList: TypeIdentifier;
    const csv: TypeIdentifier;
    const editableTypes: Array<TypeIdentifier>;
    const gif: TypeIdentifier;
    const image: TypeIdentifier;
    const jpeg: TypeIdentifier;
    const json: TypeIdentifier;
    const pdf: TypeIdentifier;
    const plainText: TypeIdentifier;
    const png: TypeIdentifier;
    const propertyList: TypeIdentifier;
    const readableTypes: Array<TypeIdentifier>;
    const rtf: TypeIdentifier;
    const rtfd: TypeIdentifier;
    const tiff: TypeIdentifier;
    const writableTypes: Array<TypeIdentifier>;
    const xmlPropertyList: TypeIdentifier;
}

declare class TypeIdentifier {
    constructor (identifier: string);
    conformsTo(other: TypeIdentifier): boolean;
    readonly displayName: string;
    readonly identifier: string;
    readonly pathExtensions: Array<string>;
}

// URL

declare namespace URL {
    function choose(types: Array<string>): URL | null;
    function chooseFolder(): URL | null;
    function fromString(string: string, relativeToURL: URL | null): URL | null;
    function fromPath(path: string, isDirectory: boolean, relativeToURL: URL | null): URL;
    function tellScript(app: string, js: string, arg: Object | null): URL | null;
    function tellFunction(app: string, jsFunction: Function, arg: Object | null): URL | null;
    const currentAppScheme: string;
    const documentsDirectory: URL;
}

declare class URL {
    fetch(success: (contents: Data) => void, failure: (error: Error) => void | null): void;
    call(success: Function, failure: Function | null): void;
    open(): void;
    find(types: Array<TypeIdentifier>, recurse: boolean | null): Promise<Array<URL>>;
    toString(): string;
    appendingPathComponent(component: string): URL;
    appendingPathExtension(pathExtension: string): URL;
    deletingPathExtension(): URL;
    deletingLastPathComponent(): URL;
    readonly absoluteString: string;
    readonly absoluteURL: URL;
    readonly baseURL: URL | null;
    readonly fragment: string | null;
    readonly hasDirectoryPath: boolean;
    readonly host: string | null;
    readonly isFileURL: boolean;
    readonly lastPathComponent: string;
    readonly password: string | null;
    readonly path: string | null;
    readonly pathComponents: Array<string>;
    readonly pathExtension: string;
    readonly port: number | null;
    readonly query: string | null;
    readonly relativePath: string | null;
    readonly relativeString: string;
    readonly scheme: string | null;
    readonly string: string;
    readonly user: string | null;
}

// URL.Access

declare namespace URL {
    class Access {
        readonly url: URL;
    }
}

// URL.Bookmark

declare namespace URL.Bookmark {
    function fromURL(url: URL): URL.Bookmark;
}

declare namespace URL {
    class Bookmark {
        access(): Promise<URL.Access>;
    }
}

// URL.Components

declare namespace URL.Components {
    function fromString(string: string): URL.Components | null;
    function fromURL(url: URL, resolvingAgainstBaseURL: boolean): URL.Components | null;
}

declare namespace URL {
    class Components {
        constructor ();
        urlRelativeTo(base: URL | null): URL | null;
        fragment: string | null;
        host: string | null;
        password: string | null;
        path: string;
        port: number | null;
        query: string | null;
        queryItems: Array<URL.QueryItem> | null;
        scheme: string | null;
        readonly url: URL | null;
        user: string | null;
    }
}

// URL.FetchRequest

declare namespace URL.FetchRequest {
    function fromString(string: string): URL.FetchRequest | null;
}

declare namespace URL {
    class FetchRequest {
        constructor ();
        fetch(): Promise<URL.FetchResponse>;
        allowsConstrainedNetworkAccess: boolean;
        allowsExpensiveNetworkAccess: boolean;
        bodyData: Data | null;
        bodyString: string | null;
        cache: string | null;
        headers: object;
        httpShouldHandleCookies: boolean;
        httpShouldUsePipelining: boolean;
        method: string | null;
        url: URL | null;
    }
}

// URL.FetchResponse

declare namespace URL {
    class FetchResponse {
        readonly bodyData: Data | null;
        readonly bodyString: string | null;
        readonly headers: object;
        readonly mimeType: string | null;
        readonly statusCode: number;
        readonly textEncodingName: string | null;
        readonly url: URL | null;
    }
}

// URL.QueryItem

declare namespace URL {
    class QueryItem {
        constructor (name: string, value: string | null);
        readonly name: string;
        readonly value: string | null;
    }
}

// Version

declare class Version {
    constructor (versionString: string);
    equals(version: Version): boolean;
    atLeast(version: Version): boolean;
    isAfter(version: Version): boolean;
    isBefore(version: Version): boolean;
    readonly versionString: string;
}

// Window

declare class Window {
    readonly selection: Selection;
}

// XML

declare class XML {
}

// XML.Document

declare namespace XML.Document {
    function fromData(data: Data, whitespaceBehavior: XML.WhitespaceBehavior | null): XML.Document;
}

declare namespace XML {
    class Document {
        constructor (rootElement: string | XML.Element, configuration: XML.Document.Configuration | null);
        xmlData(): Data;
        addElement(name: string, f: () => void | null): void;
        appendString(string: string): void;
        setAttribute(attribute: string, value: string | null): void;
        readonly dtdPublicID: string | null;
        readonly dtdSystemID: URL | null;
        readonly rootElement: XML.Element;
        readonly schemaID: URL | null;
        readonly schemaNamespace: string | null;
        readonly stringEncoding: StringEncoding;
        readonly topElement: XML.Element;
        readonly whitespaceBehavior: XML.WhitespaceBehavior;
    }
}

// XML.Document.Configuration

declare namespace XML.Document {
    class Configuration {
        constructor ();
        dtdPublicID: string | null;
        dtdSystemID: URL | null;
        schemaID: URL | null;
        schemaNamespace: string | null;
        stringEncoding: StringEncoding;
        whitespaceBehavior: XML.WhitespaceBehavior | null;
    }
}

// XML.Element

declare namespace XML {
    class Element {
        constructor (name: string);
        childAtIndex(childIndex: number): string | XML.Element | null;
        insertChild(child: string | XML.Element, childIndex: number): void;
        appendChild(child: string | XML.Element): void;
        removeChildAtIndex(childIndex: number): void;
        removeAllChildren(): void;
        firstChildNamed(name: string): XML.Element | null;
        firstChildAtPath(path: string): XML.Element | null;
        firstChildWithAttribute(attribute: string, value: string): XML.Element | null;
        attributeNamed(name: string): string | null;
        setAttribute(name: string, value: string | null): void;
        apply(f: (node: string | XML.Element) => _omnijs_AnonymousProxy | null): _omnijs_AnonymousProxy | null;
        readonly attributeCount: number;
        readonly attributeNames: Array<string>;
        children: Array<string | XML.Element>;
        readonly childrenCount: number;
        readonly lastChild: string | XML.Element | null;
        readonly name: string;
        readonly stringContents: string;
    }
}

// XML.WhitespaceBehavior

declare namespace XML {
    class WhitespaceBehavior {
        constructor (defaultBehavior: XML.WhitespaceBehavior.Type);
        setBehaviorForElementName(behavior: XML.WhitespaceBehavior.Type, elementName: string): void;
        behaviorForElementName(elementName: string): XML.WhitespaceBehavior.Type;
        readonly defaultBehavior: XML.WhitespaceBehavior.Type;
    }
}

// XML.WhitespaceBehavior.Type

declare namespace XML.WhitespaceBehavior.Type {
    const Auto: XML.WhitespaceBehavior.Type;
    const Ignore: XML.WhitespaceBehavior.Type;
    const Preserve: XML.WhitespaceBehavior.Type;
    const all: Array<XML.WhitespaceBehavior.Type>;
}

declare namespace XML.WhitespaceBehavior {
    class Type {
    }
}

