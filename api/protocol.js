/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Proto = $root.Proto = (() => {

    /**
     * Namespace Proto.
     * @exports Proto
     * @namespace
     */
    const Proto = {};

    Proto.Chapter = (function() {

        /**
         * Properties of a Chapter.
         * @memberof Proto
         * @interface IChapter
         * @property {number|null} [id] Chapter id
         * @property {string|null} [name] Chapter name
         * @property {string|null} [thumbnailUrl] Chapter thumbnailUrl
         */

        /**
         * Constructs a new Chapter.
         * @memberof Proto
         * @classdesc Represents a Chapter.
         * @implements IChapter
         * @constructor
         * @param {Proto.IChapter=} [properties] Properties to set
         */
        function Chapter(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chapter id.
         * @member {number} id
         * @memberof Proto.Chapter
         * @instance
         */
        Chapter.prototype.id = 0;

        /**
         * Chapter name.
         * @member {string} name
         * @memberof Proto.Chapter
         * @instance
         */
        Chapter.prototype.name = "";

        /**
         * Chapter thumbnailUrl.
         * @member {string} thumbnailUrl
         * @memberof Proto.Chapter
         * @instance
         */
        Chapter.prototype.thumbnailUrl = "";

        /**
         * Creates a new Chapter instance using the specified properties.
         * @function create
         * @memberof Proto.Chapter
         * @static
         * @param {Proto.IChapter=} [properties] Properties to set
         * @returns {Proto.Chapter} Chapter instance
         */
        Chapter.create = function create(properties) {
            return new Chapter(properties);
        };

        /**
         * Encodes the specified Chapter message. Does not implicitly {@link Proto.Chapter.verify|verify} messages.
         * @function encode
         * @memberof Proto.Chapter
         * @static
         * @param {Proto.IChapter} message Chapter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chapter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.thumbnailUrl != null && Object.hasOwnProperty.call(message, "thumbnailUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.thumbnailUrl);
            return writer;
        };

        /**
         * Decodes a Chapter message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.Chapter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.Chapter} Chapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chapter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.Chapter();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.thumbnailUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Chapter;
    })();

    Proto.Tag = (function() {

        /**
         * Properties of a Tag.
         * @memberof Proto
         * @interface ITag
         * @property {number|null} [id] Tag id
         * @property {string|null} [name] Tag name
         */

        /**
         * Constructs a new Tag.
         * @memberof Proto
         * @classdesc Represents a Tag.
         * @implements ITag
         * @constructor
         * @param {Proto.ITag=} [properties] Properties to set
         */
        function Tag(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tag id.
         * @member {number} id
         * @memberof Proto.Tag
         * @instance
         */
        Tag.prototype.id = 0;

        /**
         * Tag name.
         * @member {string} name
         * @memberof Proto.Tag
         * @instance
         */
        Tag.prototype.name = "";

        /**
         * Creates a new Tag instance using the specified properties.
         * @function create
         * @memberof Proto.Tag
         * @static
         * @param {Proto.ITag=} [properties] Properties to set
         * @returns {Proto.Tag} Tag instance
         */
        Tag.create = function create(properties) {
            return new Tag(properties);
        };

        /**
         * Encodes the specified Tag message. Does not implicitly {@link Proto.Tag.verify|verify} messages.
         * @function encode
         * @memberof Proto.Tag
         * @static
         * @param {Proto.ITag} message Tag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Decodes a Tag message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.Tag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.Tag} Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tag.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.Tag();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Tag;
    })();

    Proto.Title = (function() {

        /**
         * Properties of a Title.
         * @memberof Proto
         * @interface ITitle
         * @property {number|null} [id] Title id
         * @property {string|null} [name] Title name
         * @property {string|null} [description] Title description
         * @property {string|null} [thumbnailUrl] Title thumbnailUrl
         * @property {string|null} [likeCount] Title likeCount
         */

        /**
         * Constructs a new Title.
         * @memberof Proto
         * @classdesc Represents a Title.
         * @implements ITitle
         * @constructor
         * @param {Proto.ITitle=} [properties] Properties to set
         */
        function Title(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Title id.
         * @member {number} id
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.id = 0;

        /**
         * Title name.
         * @member {string} name
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.name = "";

        /**
         * Title description.
         * @member {string} description
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.description = "";

        /**
         * Title thumbnailUrl.
         * @member {string} thumbnailUrl
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.thumbnailUrl = "";

        /**
         * Title likeCount.
         * @member {string} likeCount
         * @memberof Proto.Title
         * @instance
         */
        Title.prototype.likeCount = "";

        /**
         * Creates a new Title instance using the specified properties.
         * @function create
         * @memberof Proto.Title
         * @static
         * @param {Proto.ITitle=} [properties] Properties to set
         * @returns {Proto.Title} Title instance
         */
        Title.create = function create(properties) {
            return new Title(properties);
        };

        /**
         * Encodes the specified Title message. Does not implicitly {@link Proto.Title.verify|verify} messages.
         * @function encode
         * @memberof Proto.Title
         * @static
         * @param {Proto.ITitle} message Title message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Title.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.thumbnailUrl != null && Object.hasOwnProperty.call(message, "thumbnailUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.thumbnailUrl);
            if (message.likeCount != null && Object.hasOwnProperty.call(message, "likeCount"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.likeCount);
            return writer;
        };

        /**
         * Decodes a Title message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.Title
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.Title} Title
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Title.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.Title();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.thumbnailUrl = reader.string();
                    break;
                case 5:
                    message.likeCount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Title;
    })();

    Proto.HomeView = (function() {

        /**
         * Properties of a HomeView.
         * @memberof Proto
         * @interface IHomeView
         * @property {Array.<Proto.HomeView.ITitlesByTag>|null} [titlesByTag] HomeView titlesByTag
         */

        /**
         * Constructs a new HomeView.
         * @memberof Proto
         * @classdesc Represents a HomeView.
         * @implements IHomeView
         * @constructor
         * @param {Proto.IHomeView=} [properties] Properties to set
         */
        function HomeView(properties) {
            this.titlesByTag = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HomeView titlesByTag.
         * @member {Array.<Proto.HomeView.ITitlesByTag>} titlesByTag
         * @memberof Proto.HomeView
         * @instance
         */
        HomeView.prototype.titlesByTag = $util.emptyArray;

        /**
         * Creates a new HomeView instance using the specified properties.
         * @function create
         * @memberof Proto.HomeView
         * @static
         * @param {Proto.IHomeView=} [properties] Properties to set
         * @returns {Proto.HomeView} HomeView instance
         */
        HomeView.create = function create(properties) {
            return new HomeView(properties);
        };

        /**
         * Encodes the specified HomeView message. Does not implicitly {@link Proto.HomeView.verify|verify} messages.
         * @function encode
         * @memberof Proto.HomeView
         * @static
         * @param {Proto.IHomeView} message HomeView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HomeView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.titlesByTag != null && message.titlesByTag.length)
                for (let i = 0; i < message.titlesByTag.length; ++i)
                    $root.Proto.HomeView.TitlesByTag.encode(message.titlesByTag[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a HomeView message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.HomeView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.HomeView} HomeView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HomeView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.HomeView();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.titlesByTag && message.titlesByTag.length))
                        message.titlesByTag = [];
                    message.titlesByTag.push($root.Proto.HomeView.TitlesByTag.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        HomeView.TitlesByTag = (function() {

            /**
             * Properties of a TitlesByTag.
             * @memberof Proto.HomeView
             * @interface ITitlesByTag
             * @property {Proto.ITag|null} [tag] TitlesByTag tag
             * @property {Array.<Proto.ITitle>|null} [titles] TitlesByTag titles
             */

            /**
             * Constructs a new TitlesByTag.
             * @memberof Proto.HomeView
             * @classdesc Represents a TitlesByTag.
             * @implements ITitlesByTag
             * @constructor
             * @param {Proto.HomeView.ITitlesByTag=} [properties] Properties to set
             */
            function TitlesByTag(properties) {
                this.titles = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TitlesByTag tag.
             * @member {Proto.ITag|null|undefined} tag
             * @memberof Proto.HomeView.TitlesByTag
             * @instance
             */
            TitlesByTag.prototype.tag = null;

            /**
             * TitlesByTag titles.
             * @member {Array.<Proto.ITitle>} titles
             * @memberof Proto.HomeView.TitlesByTag
             * @instance
             */
            TitlesByTag.prototype.titles = $util.emptyArray;

            /**
             * Creates a new TitlesByTag instance using the specified properties.
             * @function create
             * @memberof Proto.HomeView.TitlesByTag
             * @static
             * @param {Proto.HomeView.ITitlesByTag=} [properties] Properties to set
             * @returns {Proto.HomeView.TitlesByTag} TitlesByTag instance
             */
            TitlesByTag.create = function create(properties) {
                return new TitlesByTag(properties);
            };

            /**
             * Encodes the specified TitlesByTag message. Does not implicitly {@link Proto.HomeView.TitlesByTag.verify|verify} messages.
             * @function encode
             * @memberof Proto.HomeView.TitlesByTag
             * @static
             * @param {Proto.HomeView.ITitlesByTag} message TitlesByTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TitlesByTag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                    $root.Proto.Tag.encode(message.tag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.titles != null && message.titles.length)
                    for (let i = 0; i < message.titles.length; ++i)
                        $root.Proto.Title.encode(message.titles[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a TitlesByTag message from the specified reader or buffer.
             * @function decode
             * @memberof Proto.HomeView.TitlesByTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Proto.HomeView.TitlesByTag} TitlesByTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TitlesByTag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.HomeView.TitlesByTag();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tag = $root.Proto.Tag.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.titles && message.titles.length))
                            message.titles = [];
                        message.titles.push($root.Proto.Title.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return TitlesByTag;
        })();

        return HomeView;
    })();

    Proto.SearchView = (function() {

        /**
         * Properties of a SearchView.
         * @memberof Proto
         * @interface ISearchView
         * @property {Array.<Proto.ITitle>|null} [titles] SearchView titles
         */

        /**
         * Constructs a new SearchView.
         * @memberof Proto
         * @classdesc Represents a SearchView.
         * @implements ISearchView
         * @constructor
         * @param {Proto.ISearchView=} [properties] Properties to set
         */
        function SearchView(properties) {
            this.titles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SearchView titles.
         * @member {Array.<Proto.ITitle>} titles
         * @memberof Proto.SearchView
         * @instance
         */
        SearchView.prototype.titles = $util.emptyArray;

        /**
         * Creates a new SearchView instance using the specified properties.
         * @function create
         * @memberof Proto.SearchView
         * @static
         * @param {Proto.ISearchView=} [properties] Properties to set
         * @returns {Proto.SearchView} SearchView instance
         */
        SearchView.create = function create(properties) {
            return new SearchView(properties);
        };

        /**
         * Encodes the specified SearchView message. Does not implicitly {@link Proto.SearchView.verify|verify} messages.
         * @function encode
         * @memberof Proto.SearchView
         * @static
         * @param {Proto.ISearchView} message SearchView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.titles != null && message.titles.length)
                for (let i = 0; i < message.titles.length; ++i)
                    $root.Proto.Title.encode(message.titles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SearchView message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.SearchView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.SearchView} SearchView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.SearchView();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.titles && message.titles.length))
                        message.titles = [];
                    message.titles.push($root.Proto.Title.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SearchView;
    })();

    Proto.TitleDetailView = (function() {

        /**
         * Properties of a TitleDetailView.
         * @memberof Proto
         * @interface ITitleDetailView
         * @property {Proto.ITitle|null} [title] TitleDetailView title
         * @property {Array.<Proto.IChapter>|null} [chapters] TitleDetailView chapters
         */

        /**
         * Constructs a new TitleDetailView.
         * @memberof Proto
         * @classdesc Represents a TitleDetailView.
         * @implements ITitleDetailView
         * @constructor
         * @param {Proto.ITitleDetailView=} [properties] Properties to set
         */
        function TitleDetailView(properties) {
            this.chapters = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TitleDetailView title.
         * @member {Proto.ITitle|null|undefined} title
         * @memberof Proto.TitleDetailView
         * @instance
         */
        TitleDetailView.prototype.title = null;

        /**
         * TitleDetailView chapters.
         * @member {Array.<Proto.IChapter>} chapters
         * @memberof Proto.TitleDetailView
         * @instance
         */
        TitleDetailView.prototype.chapters = $util.emptyArray;

        /**
         * Creates a new TitleDetailView instance using the specified properties.
         * @function create
         * @memberof Proto.TitleDetailView
         * @static
         * @param {Proto.ITitleDetailView=} [properties] Properties to set
         * @returns {Proto.TitleDetailView} TitleDetailView instance
         */
        TitleDetailView.create = function create(properties) {
            return new TitleDetailView(properties);
        };

        /**
         * Encodes the specified TitleDetailView message. Does not implicitly {@link Proto.TitleDetailView.verify|verify} messages.
         * @function encode
         * @memberof Proto.TitleDetailView
         * @static
         * @param {Proto.ITitleDetailView} message TitleDetailView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TitleDetailView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                $root.Proto.Title.encode(message.title, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.chapters != null && message.chapters.length)
                for (let i = 0; i < message.chapters.length; ++i)
                    $root.Proto.Chapter.encode(message.chapters[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a TitleDetailView message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.TitleDetailView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.TitleDetailView} TitleDetailView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TitleDetailView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.TitleDetailView();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = $root.Proto.Title.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.chapters && message.chapters.length))
                        message.chapters = [];
                    message.chapters.push($root.Proto.Chapter.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TitleDetailView;
    })();

    Proto.ViewerView = (function() {

        /**
         * Properties of a ViewerView.
         * @memberof Proto
         * @interface IViewerView
         * @property {Proto.IChapter|null} [chapter] ViewerView chapter
         * @property {Array.<string>|null} [imageUrls] ViewerView imageUrls
         */

        /**
         * Constructs a new ViewerView.
         * @memberof Proto
         * @classdesc Represents a ViewerView.
         * @implements IViewerView
         * @constructor
         * @param {Proto.IViewerView=} [properties] Properties to set
         */
        function ViewerView(properties) {
            this.imageUrls = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ViewerView chapter.
         * @member {Proto.IChapter|null|undefined} chapter
         * @memberof Proto.ViewerView
         * @instance
         */
        ViewerView.prototype.chapter = null;

        /**
         * ViewerView imageUrls.
         * @member {Array.<string>} imageUrls
         * @memberof Proto.ViewerView
         * @instance
         */
        ViewerView.prototype.imageUrls = $util.emptyArray;

        /**
         * Creates a new ViewerView instance using the specified properties.
         * @function create
         * @memberof Proto.ViewerView
         * @static
         * @param {Proto.IViewerView=} [properties] Properties to set
         * @returns {Proto.ViewerView} ViewerView instance
         */
        ViewerView.create = function create(properties) {
            return new ViewerView(properties);
        };

        /**
         * Encodes the specified ViewerView message. Does not implicitly {@link Proto.ViewerView.verify|verify} messages.
         * @function encode
         * @memberof Proto.ViewerView
         * @static
         * @param {Proto.IViewerView} message ViewerView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ViewerView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chapter != null && Object.hasOwnProperty.call(message, "chapter"))
                $root.Proto.Chapter.encode(message.chapter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.imageUrls != null && message.imageUrls.length)
                for (let i = 0; i < message.imageUrls.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.imageUrls[i]);
            return writer;
        };

        /**
         * Decodes a ViewerView message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ViewerView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ViewerView} ViewerView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ViewerView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ViewerView();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chapter = $root.Proto.Chapter.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.imageUrls && message.imageUrls.length))
                        message.imageUrls = [];
                    message.imageUrls.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ViewerView;
    })();

    return Proto;
})();

export { $root as default };
