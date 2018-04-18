declare const dd: Dingtalk.dd;

declare namespace Dingtalk {
    interface CallbackParam {
        [param: string]: any;
        /**成功回调 */
        onSuccess?: Function;
        /**失败回调 */
        onFail?: Function;
        /**取消回调 */
        onCancel?: Function;
    }

    interface ConfigParam {
        /**微应用ID */
        agentId: string;
        /**企业ID */
        corpId: string;
        /**生成签名的时间戳 */
        timeStamp: string;
        /**生成签名的随机串 */
        nonceStr: string;
        /**签名 */
        signature: string;
        /**0表示微应用的jsapi 1表示服务窗的jsapi 不填默认为0 */
        type?: 0 | 1;
        /**需要使用的jsapi列表 不要带dd */
        jsApiList: Array<string>;
    }

    interface dd {
        /**权限验证配置 */
        config(param: ConfigParam): void;
        /**处理成功验证 */
        ready(callback: Function): void;
        /**处理失败验证 */
        error(callback: (error) => void): void;
        device: Device;
        biz: Biz;
        ui: Ui;
        runtime: Runtime;
        internal: Internal;
        util: Util3;
        preRelease: PreRelease;
        channel: Channel2;
        net: Net;
        service: Service;
        retail: Retail;
        version: string;
    }

    interface Retail {
        chat: Chat3;
        telephone: Telephone2;
    }

    interface Telephone2 {
        call(callback: CallbackParam): void;
    }

    interface Chat3 {
        open(callback: CallbackParam): void;
    }

    interface Service {
        request: Request2;
    }

    interface Request2 {
        httpOverLwp(callback: CallbackParam): void;
        mtop(callback: CallbackParam): void;
    }

    interface Net {
        vpn: Vpn;
        tunnel: Tunnel;
    }

    interface Tunnel {
        request(callback: CallbackParam): void;
    }

    interface Vpn {
        check(callback: CallbackParam): void;
        start(callback: CallbackParam): void;
        stop(callback: CallbackParam): void;
    }

    interface Channel2 {
        permission: Auth;
        open: Open;
    }

    interface Open {
        profile(callback: CallbackParam): void;
    }

    interface PreRelease {
        appLink: AppLink;
    }

    interface Util3 {
        localStorage: LocalStorage;
        domainStorage: DomainStorage;
        cookies: Cookies;
    }

    interface Cookies {
        write(callback: CallbackParam): void;
        read(callback: CallbackParam): void;
    }

    interface DomainStorage {
        getItem(callback: CallbackParam): void;
        setItem(callback: CallbackParam): void;
        removeItem(callback: CallbackParam): void;
        clearItems(callback: CallbackParam): void;
        listItems(callback: CallbackParam): void;
    }

    interface LocalStorage {
        getItem(callback: CallbackParam): void;
        setItem(callback: CallbackParam): void;
        removeItem(callback: CallbackParam): void;
    }

    interface Internal {
        lwp: Lwp;
        microapp: Microapp;
        user: User2;
        request: Request;
        util: Util2;
        log: Log;
        hpm: Hpm;
        phoneContact: PhoneContact;
        pageLink: PageLink;
        notify: Notify2;
        schema: Schema;
        contact: Contact2;
        beacon: Beacon;
        host: Host;
        createOrg: CreateOrg;
        attend: Attend;
        certify: Certify;
        channel: Channel;
        auth: Auth2;
        chat: Chat2;
        health: Health2;
        enterpriseEncryption: EnterpriseEncryption;
        faceScan: FaceScan;
        ATMBle: ATMBle;
        dingCard: DingCard;
        facialRecognition: FacialRecognition;
        alpha: Alpha;
        search: Search;
        guide: Guide;
        cspace: Cspace2;
        safe: Safe;
        redpacket: Redpacket;
    }

    interface Redpacket {
        nav2RedPacket(callback: CallbackParam): void;
    }

    interface Safe {
        getAppInfo(callback: CallbackParam): void;
        getDeviceInfo(callback: CallbackParam): void;
        scanPlugin(callback: CallbackParam): void;
    }

    interface Cspace2 {
        decryptAndUpload(callback: CallbackParam): void;
        cancelDecryptAndUpload(callback: CallbackParam): void;
        openFolder(callback: CallbackParam): void;
    }

    interface Guide {
        closeGuideBanner(callback: CallbackParam): void;
    }

    interface Search {
        debug(callback: CallbackParam): void;
    }

    interface Alpha {
        getDevicePwd(callback: CallbackParam): void;
        addWdsDevice(callback: CallbackParam): void;
        copyPwd(callback: CallbackParam): void;
    }

    interface FacialRecognition {
        detectFace(callback: CallbackParam): void;
    }

    interface DingCard {
        bindWorkMobile(callback: CallbackParam): void;
        unbindWorkMobile(callback: CallbackParam): void;
    }

    interface ATMBle {
        startMonitor(callback: CallbackParam): void;
        stopMonitor(callback: CallbackParam): void;
        checkIn(callback: CallbackParam): void;
    }

    interface FaceScan {
        prepareScan(callback: CallbackParam): void;
        scan(callback: CallbackParam): void;
    }

    interface EnterpriseEncryption {
        info(callback: CallbackParam): void;
        sendMessageToMaster(callback: CallbackParam): void;
        turnOnWithAnimation(callback: CallbackParam): void;
    }

    interface Health2 {
        getTodaysStepCount(callback: CallbackParam): void;
        enableStepCountSync(callback: CallbackParam): void;
        disableStepCountSync(callback: CallbackParam): void;
    }

    interface Chat2 {
        pickGroupConversation(callback: CallbackParam): void;
        openConversation(callback: CallbackParam): void;
        selectAndSendText(callback: CallbackParam): void;
        transmitMsg(callback: CallbackParam): void;
        sendMultiMsges(callback: CallbackParam): void;
    }

    interface Auth2 {
        postLoginTempCode(callback: CallbackParam): void;
    }

    interface Channel {
        infoExist(callback: CallbackParam): void;
        openPage(callback: CallbackParam): void;
    }

    interface Certify {
        step(callback: CallbackParam): void;
        biometric(callback: CallbackParam): void;
        takePhoto(callback: CallbackParam): void;
        submit(callback: CallbackParam): void;
    }

    interface Attend {
        assistant(callback: CallbackParam): void;
    }

    interface CreateOrg {
        industryInfo(callback: CallbackParam): void;
        successJump(callback: CallbackParam): void;
        lastCreateOrgInfo(callback: CallbackParam): void;
    }

    interface Host {
        lwp(callback: CallbackParam): void;
        query(callback: CallbackParam): void;
        cancel(callback: CallbackParam): void;
    }

    interface Beacon {
        detectBeacons(callback: CallbackParam): void;
        detectStart(callback: CallbackParam): void;
        detectStop(callback: CallbackParam): void;
        bind(callback: CallbackParam): void;
    }

    interface Contact2 {
        chooseMobileContact(callback: CallbackParam): void;
        chooseOrgAddress(callback: CallbackParam): void;
        internalComplexPicker(callback: CallbackParam): void;
    }

    interface Schema {
        open(callback: CallbackParam): void;
        openWifiSetting(callback: CallbackParam): void;
    }

    interface Notify2 {
        send(callback: CallbackParam): void;
        add(callback: CallbackParam): void;
        showModal(callback: CallbackParam): void;
        closeModal(callback: CallbackParam): void;
    }

    interface PageLink {
        request(callback: CallbackParam): void;
        response(callback: CallbackParam): void;
        fetch(callback: CallbackParam): void;
    }

    interface PhoneContact {
        add(callback: CallbackParam): void;
    }

    interface Hpm {
        get(callback: CallbackParam): void;
        update(callback: CallbackParam): void;
        queryInfo(callback: CallbackParam): void;
        delete(callback: CallbackParam): void;
    }

    interface Log {
        upload(callback: CallbackParam): void;
        add(callback: CallbackParam): void;
        uploadException(callback: CallbackParam): void;
        searchQueryLog(callback: CallbackParam): void;
        searchClickLog(callback: CallbackParam): void;
    }

    interface Util2 {
        encryData(callback: CallbackParam): void;
        getCorpIdByOrgId(callback: CallbackParam): void;
        getOrgIdByCorpId(callback: CallbackParam): void;
        isSimulator(callback: CallbackParam): void;
        getWua(callback: CallbackParam): void;
        chooseIndustry(callback: CallbackParam): void;
        chooseRegion(callback: CallbackParam): void;
        collectCell(callback: CallbackParam): void;
        showAddExternalContactDialog(callback: CallbackParam): void;
        getBindSmartDeviceOrgList(callback: CallbackParam): void;
        authAlipayInvoice(callback: CallbackParam): void;
    }

    interface Request {
        lwp(callback: CallbackParam): void;
        getSecurityToken(callback: CallbackParam): void;
        httpOverLWP(callback: CallbackParam): void;
    }

    interface User2 {
        getRole(callback: CallbackParam): void;
        isNewUser(callback: CallbackParam): void;
        allOrganizations(callback: CallbackParam): void;
        showMedalEntry(callback: CallbackParam): void;
    }

    interface Microapp {
        checkInstalled(callback: CallbackParam): void;
        queryInfo(callback: CallbackParam): void;
        triggerSync(callback: CallbackParam): void;
    }

    interface Lwp {
        call(callback: CallbackParam): void;
        setSessionIdCookie(callback: CallbackParam): void;
    }

    interface Runtime {
        info: Info;
        permission: Permission;
        message: Message;
        monitor: Monitor;
    }

    interface Monitor {
        usability(callback: CallbackParam): void;
        enableUsability(callback: CallbackParam): void;
        finishLoad(callback: CallbackParam): void;
    }

    interface Message {
        post(callback: CallbackParam): void;
        fetch(callback: CallbackParam): void;
    }

    interface Permission {
        requestAuthCode(callback: CallbackParam): void;
        requestJsApis(callback: CallbackParam): void;
        requestOperateAuthCode(callback: CallbackParam): void;
    }

    interface Info {
        status(callback: CallbackParam): void;
    }

    interface Ui {
        input: Input;
        progressBar: ProgressBar;
        pullToRefresh: PullToRefresh;
        webViewBounce: WebViewBounce;
        nav: Nav;
        drawer: Drawer;
        tab: Tab;
        appLink: AppLink;
    }

    interface AppLink {
        open(callback: CallbackParam): void;
        request(callback: CallbackParam): void;
        response(callback: CallbackParam): void;
        fetch(callback: CallbackParam): void;
    }

    interface Tab {
        init(callback: CallbackParam): void;
        start(callback: CallbackParam): void;
        config(callback: CallbackParam): void;
        select(callback: CallbackParam): void;
        add(callback: CallbackParam): void;
        remove(callback: CallbackParam): void;
    }

    interface Drawer {
        init(callback: CallbackParam): void;
        config(callback: CallbackParam): void;
        enable(callback: CallbackParam): void;
        disable(callback: CallbackParam): void;
        open(callback: CallbackParam): void;
        close(callback: CallbackParam): void;
    }

    interface Nav {
        preload(callback: CallbackParam): void;
        go(callback: CallbackParam): void;
        recycle(callback: CallbackParam): void;
        push(callback: CallbackParam): void;
        pop(callback: CallbackParam): void;
        quit(callback: CallbackParam): void;
        close(callback: CallbackParam): void;
        getCurrentId(callback: CallbackParam): void;
    }

    interface WebViewBounce {
        enable(callback: CallbackParam): void;
        disable(callback: CallbackParam): void;
    }

    interface PullToRefresh {
        enable(callback: CallbackParam): void;
        stop(callback: CallbackParam): void;
        disable(callback: CallbackParam): void;
    }

    interface ProgressBar {
        setColors(callback: CallbackParam): void;
    }

    interface Input {
        plain(callback: CallbackParam): void;
    }

    interface Biz {
        util: Util;
        user: User;
        navigation: Navigation;
        ding: Ding;
        telephone: Telephone;
        chat: Chat;
        contact: Contact;
        map: Map;
        customContact: CustomContact;
        cspace: Cspace;
        clipboardData: ClipboardData;
        intent: Intent;
        notify: Notify;
        alipay: Alipay;
        auth: Auth;
        redenvelop: Redenvelop;
        data: Data;
        microApp: MicroApp;
        calendar: Calendar;
        verify: Verify;
        faceBox: FaceBox;
        oa: Oa;
        live: Live;
        zoloz: Zoloz;
        schedule: Schedule;
    }

    interface Schedule {
        create(callback: CallbackParam): void;
    }

    interface Zoloz {
        zimIdentity(callback: CallbackParam): void;
        download(callback: CallbackParam): void;
    }

    interface Live {
        listLiveRecords(callback: CallbackParam): void;
        getLiveStatistics(callback: CallbackParam): void;
        listLiveViewers(callback: CallbackParam): void;
        nav2GroupAnchorList(callback: CallbackParam): void;
        nav2PlayVideo(callback: CallbackParam): void;
        showPlayer(callback: CallbackParam): void;
        destroyPlayer(callback: CallbackParam): void;
        initPlayer(callback: CallbackParam): void;
        playerPlay(callback: CallbackParam): void;
        playerPause(callback: CallbackParam): void;
        hidePlayer(callback: CallbackParam): void;
    }

    interface Oa {
        setWorkTab(callback: CallbackParam): void;
        authorityVerify(callback: CallbackParam): void;
    }

    interface FaceBox {
        startCameraRecord(callback: CallbackParam): void;
        startPictureRecord(callback: CallbackParam): void;
        removeFace(callback: CallbackParam): void;
        getRecognition(callback: CallbackParam): void;
        setRecognition(callback: CallbackParam): void;
        showRemind(callback: CallbackParam): void;
        sendMessageToContact(callback: CallbackParam): void;
        experienceFunction(callback: CallbackParam): void;
        startCameraRecordFromPartner(callback: CallbackParam): void;
    }

    interface Verify {
        takePhoto(callback: CallbackParam): void;
        biometric(callback: CallbackParam): void;
    }

    interface Calendar {
        chooseOneDay(callback: CallbackParam): void;
        chooseHalfDay(callback: CallbackParam): void;
        chooseInterval(callback: CallbackParam): void;
        chooseDateTime(callback: CallbackParam): void;
        datePicker(callback: CallbackParam): void;
    }

    interface MicroApp {
        visualList(callback: CallbackParam): void;
    }

    interface Data {
        getAvatar(callback: CallbackParam): void;
    }

    interface Redenvelop {
        sendNormalRedEnvelop(callback: CallbackParam): void;
        sendEnterpriseRedEnvelop(callback: CallbackParam): void;
    }

    interface Auth {
        requestAuthCode(callback: CallbackParam): void;
    }

    interface Alipay {
        pay(callback: CallbackParam): void;
        auth(callback: CallbackParam): void;
    }

    interface Notify {
        send(callback: CallbackParam): void;
    }

    interface Intent {
        fetchData(callback: CallbackParam): void;
    }

    interface ClipboardData {
        setData(callback: CallbackParam): void;
    }

    interface Cspace {
        preview(callback: CallbackParam): void;
        saveFile(callback: CallbackParam): void;
        chooseSpaceDir(callback: CallbackParam): void;
        copy(callback: CallbackParam): void;
    }

    interface CustomContact {
        choose(callback: CallbackParam): void;
        multipleChoose(callback: CallbackParam): void;
    }

    interface Map {
        search(callback: CallbackParam): void;
        locate(callback: CallbackParam): void;
        view(callback: CallbackParam): void;
        searchRoute(callback: CallbackParam): void;
    }

    interface Contact {
        createGroup(callback: CallbackParam): void;
        choose(callback: CallbackParam): void;
        complexChoose(callback: CallbackParam): void;
        getMobileContact(callback: CallbackParam): void;
        changeCustomerFollower(callback: CallbackParam): void;
        complexPicker(callback: CallbackParam): void;
        pickCustomer(callback: CallbackParam): void;
        setRule(callback: CallbackParam): void;
        departmentsPicker(callback: CallbackParam): void;
        externalComplexPicker(callback: CallbackParam): void;
        addFromManual(callback: CallbackParam): void;
        addFromContact(callback: CallbackParam): void;
        externalEditForm(callback: CallbackParam): void;
        addUserForm(callback: CallbackParam): void;
        chooseMobileContacts(callback: CallbackParam): void;
        manageContactAlert(callback: CallbackParam): void;
        complexSelectedPicker(callback: CallbackParam): void;
        departmentsSelectedPicker(callback: CallbackParam): void;
        pickJobTitle(callback: CallbackParam): void;
        isForeignOrg(callback: CallbackParam): void;
        addSubManager(callback: CallbackParam): void;
    }

    interface Chat {
        chooseConversation(callback: CallbackParam): void;
        open(callback: CallbackParam): void;
        getConversationInfo(callback: CallbackParam): void;
        pickConversation(callback: CallbackParam): void;
        chooseConversationByCorpId(callback: CallbackParam): void;
        toConversation(callback: CallbackParam): void;
        locationChatMessage(callback: CallbackParam): void;
        openSingleChat(callback: CallbackParam): void;
        addGroup(callback: CallbackParam): void;
        createOrgPublicGroup(callback: CallbackParam): void;
        modifyGroupDesc(callback: CallbackParam): void;
    }

    interface Telephone {
        call(callback: CallbackParam): void;
        showCallMenu(callback: CallbackParam): void;
        quickCall(callback: CallbackParam): void;
        callOrgExternalContacts(callback: CallbackParam): void;
        quickCallList(callback: CallbackParam): void;
        checkBizCall(callback: CallbackParam): void;
    }

    interface Ding {
        post(callback: CallbackParam): void;
        create(callback: CallbackParam): void;
    }

    interface Navigation {
        setLeft(callback: CallbackParam): void;
        setRight(callback: CallbackParam): void;
        setTitle(callback: CallbackParam): void;
        back(callback: CallbackParam): void;
        replace(callback: CallbackParam): void;
        createEditor(callback: CallbackParam): void;
        finishEditor(callback: CallbackParam): void;
        setIcon(callback: CallbackParam): void;
        close(callback: CallbackParam): void;
        goBack(callback: CallbackParam): void;
        setMenu(callback: CallbackParam): void;
        popGesture(callback: CallbackParam): void;
        gestures(callback: CallbackParam): void;
        setActions(callback: CallbackParam): void;
        hideBar(callback: CallbackParam): void;
        setPullGesture(callback: CallbackParam): void;
        showPopdownList(callback: CallbackParam): void;
        setSubtitle(callback: CallbackParam): void;
        setTitleIcon(callback: CallbackParam): void;
    }

    interface User {
        get(callback: CallbackParam): void;
        secretID(callback: CallbackParam): void;
    }

    interface Util {
        open(callback: CallbackParam): void;
        openLink(callback: CallbackParam): void;
        share(callback: CallbackParam): void;
        ut(callback: CallbackParam): void;
        datepicker(callback: CallbackParam): void;
        timepicker(callback: CallbackParam): void;
        uploadImage(callback: CallbackParam): void;
        previewImage(callback: CallbackParam): void;
        qrcode(callback: CallbackParam): void;
        datetimepicker(callback: CallbackParam): void;
        chosen(callback: CallbackParam): void;
        scan(callback: CallbackParam): void;
        uploadImageFromCamera(callback: CallbackParam): void;
        pageClick(callback: CallbackParam): void;
        uploadAttachment(callback: CallbackParam): void;
        warn(callback: CallbackParam): void;
        multiSelect(callback: CallbackParam): void;
        presentWindow(callback: CallbackParam): void;
        fetchImageData(callback: CallbackParam): void;
        scanCard(callback: CallbackParam): void;
        addDesktopShortcuts(callback: CallbackParam): void;
        timestamp(callback: CallbackParam): void;
        encrypt(callback: CallbackParam): void;
        decrypt(callback: CallbackParam): void;
        openFloatWindow(callback: CallbackParam): void;
        vip(callback: CallbackParam): void;
        recordVideoToUpload(callback: CallbackParam): void;
        fetchFileData(callback: CallbackParam): void;
        stickPage(callback: CallbackParam): void;
        selectEmoji(callback: CallbackParam): void;
        getLocaleAndNationByCorpId(callback: CallbackParam): void;
        shareImage(callback: CallbackParam): void;
        saveImage(callback: CallbackParam): void;
        uploadMedia(callback: CallbackParam): void;
    }

    interface Device {
        notification: Notification;
        accelerometer: Accelerometer;
        geolocation: Geolocation;
        connection: Connection;
        base: Base;
        launcher: Launcher;
        audio: Audio;
        nfc: Nfc;
        health: Health;
        screenshot: Screenshot;
        screen: Screen;
    }

    interface Screen {
        rotateView(callback: CallbackParam): void;
        resetView(callback: CallbackParam): void;
    }

    interface Screenshot {
        startMonitor(callback: CallbackParam): void;
        stopMonitor(callback: CallbackParam): void;
    }

    interface Health {
        stepCount(callback: CallbackParam): void;
        dayStepCount(callback: CallbackParam): void;
    }

    interface Nfc {
        nfcRead(callback: CallbackParam): void;
        nfcWrite(callback: CallbackParam): void;
    }

    interface Audio {
        download(callback: CallbackParam): void;
        play(callback: CallbackParam): void;
        onPlayEnd(callback: CallbackParam): void;
        resume(callback: CallbackParam): void;
        pause(callback: CallbackParam): void;
        stop(callback: CallbackParam): void;
        startRecord(callback: CallbackParam): void;
        stopRecord(callback: CallbackParam): void;
        onRecordEnd(callback: CallbackParam): void;
        upload(callback: CallbackParam): void;
        translateVoice(callback: CallbackParam): void;
    }

    interface Launcher {
        checkInstalledApps(callback: CallbackParam): void;
        launchApp(callback: CallbackParam): void;
    }

    interface Base {
        getUUID(callback: CallbackParam): void;
        getInterface(callback: CallbackParam): void;
        getSettings(callback: CallbackParam): void;
        getScanWifiList(callback: CallbackParam): void;
        getWifiStatus(callback: CallbackParam): void;
        enableBluetooth(callback: CallbackParam): void;
        enableLocation(callback: CallbackParam): void;
        startBindDevice(callback: CallbackParam): void;
        unBindDevice(callback: CallbackParam): void;
        getScanWifiListAsync(callback: CallbackParam): void;
        scanBleDevice(callback: CallbackParam): void;
        stopScanBleDevice(callback: CallbackParam): void;
        connectBleDevice(callback: CallbackParam): void;
        disConnectBleDevice(callback: CallbackParam): void;
        sendDataToDevice(callback: CallbackParam): void;
        getPhoneInfo(callback: CallbackParam): void;
    }

    interface Connection {
        getNetworkType(callback: CallbackParam): void;
    }

    interface Geolocation {
        get(callback: CallbackParam): void;
        openGps(callback: CallbackParam): void;
        start(callback: CallbackParam): void;
        stop(callback: CallbackParam): void;
        status(callback: CallbackParam): void;
        isEnabled(callback: CallbackParam): void;
        isEnabledHighAccuracy(callback: CallbackParam): void;
    }

    interface Accelerometer {
        watchShake(callback: CallbackParam): void;
        clearShake(callback: CallbackParam): void;
    }

    interface Notification {
        alert(callback: CallbackParam): void;
        confirm(callback: CallbackParam): void;
        prompt(callback: CallbackParam): void;
        vibrate(callback: CallbackParam): void;
        toast(callback: CallbackParam): void;
        showPreloader(callback: CallbackParam): void;
        hidePreloader(callback: CallbackParam): void;
        actionSheet(callback: CallbackParam): void;
        modal(callback: CallbackParam): void;
        extendModal(callback: CallbackParam): void;
    }
}