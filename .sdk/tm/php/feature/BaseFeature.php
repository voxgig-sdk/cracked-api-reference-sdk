<?php
declare(strict_types=1);

// CrackedApiReference SDK base feature

class CrackedApiReferenceBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CrackedApiReferenceContext $ctx, array $options): void {}
    public function PostConstruct(CrackedApiReferenceContext $ctx): void {}
    public function PostConstructEntity(CrackedApiReferenceContext $ctx): void {}
    public function SetData(CrackedApiReferenceContext $ctx): void {}
    public function GetData(CrackedApiReferenceContext $ctx): void {}
    public function GetMatch(CrackedApiReferenceContext $ctx): void {}
    public function SetMatch(CrackedApiReferenceContext $ctx): void {}
    public function PrePoint(CrackedApiReferenceContext $ctx): void {}
    public function PreSpec(CrackedApiReferenceContext $ctx): void {}
    public function PreRequest(CrackedApiReferenceContext $ctx): void {}
    public function PreResponse(CrackedApiReferenceContext $ctx): void {}
    public function PreResult(CrackedApiReferenceContext $ctx): void {}
    public function PreDone(CrackedApiReferenceContext $ctx): void {}
    public function PreUnexpected(CrackedApiReferenceContext $ctx): void {}
}
